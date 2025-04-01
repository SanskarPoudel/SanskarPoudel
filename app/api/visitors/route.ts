import { NextRequest, NextResponse } from "next/server";
import redis from "../lib/redis";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("cf-connecting-ip") ?? "unknown";
    const timestamp = new Date().toISOString();
    const currentTime = Date.now();

    await redis.hset(`CV:visitor:${ip}`, {
      lastVisit: timestamp,
      lastVisitTimestamp: currentTime,
      visits: await redis.hincrby(`CV:visitor:${ip}`, "visits", 1),
    });

    await redis.zadd("CV:unique_visitors", currentTime, ip);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return NextResponse.json(
      { success: false, message: "Failed to track visitor" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get("key");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    if (key !== process.env.STATS_ACCESS_KEY) {
      return NextResponse.json(
        { success: false, message: "Unauthorized access" },
        { status: 401 }
      );
    }

    let startTimestamp = "0";
    let endTimestamp = "+inf";

    if (startDate) {
      const startMs = new Date(startDate).getTime();
      if (isNaN(startMs)) {
        return NextResponse.json(
          { success: false, message: "Invalid startDate format" },
          { status: 400 }
        );
      }
      startTimestamp = startMs.toString();
    }

    if (endDate) {
      const endMs = new Date(endDate).getTime();
      if (isNaN(endMs)) {
        return NextResponse.json(
          { success: false, message: "Invalid endDate format" },
          { status: 400 }
        );
      }
      endTimestamp = endMs.toString();
    }

    const visitorsInRange = await redis.zrangebyscore(
      "CV:unique_visitors",
      startTimestamp,
      endTimestamp
    );

    const uniqueVisitors = visitorsInRange.length;

    const pipeline = redis.pipeline();
    visitorsInRange.forEach((ip) => {
      pipeline.hgetall(`CV:visitor:${ip}`);
    });

    const visitorResults = (await pipeline.exec()) || [];
    const visitorDetails = visitorResults.map((result, index) => {
      const data =
        result && result[1] ? (result[1] as Record<string, string>) : {};
      const ip = visitorsInRange[index];

      return {
        ip,
        lastVisit: data.lastVisit || "unknown",
        visits: parseInt(data.visits || "0"),
        lastVisitTimestamp: parseInt(data.lastVisitTimestamp || "0"),
      };
    });

    const totalVisits = visitorDetails.reduce(
      (sum, visitor) => sum + visitor.visits,
      0
    );

    visitorDetails.sort((a, b) => b.visits - a.visits);

    const formattedStartDate = startDate
      ? new Date(parseInt(startTimestamp)).toISOString()
      : "beginning";
    const formattedEndDate = endDate
      ? new Date(parseInt(endTimestamp)).toISOString()
      : new Date().toISOString();

    return NextResponse.json({
      success: true,
      data: {
        dateRange: {
          from: formattedStartDate,
          to: formattedEndDate,
        },
        totalUniqueVisitors: uniqueVisitors,
        totalVisits,
        visitorsInRange: visitorsInRange.length,
        allVisitors: visitorDetails,
      },
    });
  } catch (error) {
    console.error("Error fetching visitor stats:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch visitor statistics" },
      { status: 500 }
    );
  }
}
