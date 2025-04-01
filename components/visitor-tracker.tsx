"use client";

import { useEffect } from "react";

export function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        await fetch("/api/visitors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Failed to track visitor:", error);
      }
    };

    trackVisitor();
  }, []);

  return null;
}
