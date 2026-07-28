"use client";

import { useEffect, useState } from "react";

export type DeviceTier = "high" | "low";

/**
 * Cheap heuristic (not a benchmark): treats narrow viewports and low logical
 * core counts as "low" tier, scaling back particle count / dpr / post-processing
 * so the scene stays smooth rather than technically "correct" on every device.
 */
export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>("high");

  useEffect(() => {
    const isNarrow = window.innerWidth < 768;
    const isLowCore =
      typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
    setTier(isNarrow || isLowCore ? "low" : "high");
  }, []);

  return tier;
}
