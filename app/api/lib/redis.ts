import Redis from "ioredis";

let redis: Redis;

export const getRedisClient = () => {
  if (!redis) {
    redis = new Redis({
      host: process.env.REDIS_HOST || "localhost",
      port: parseInt(process.env.REDIS_PORT || "6379"),
    });
  }

  return redis;
};

export default getRedisClient();
