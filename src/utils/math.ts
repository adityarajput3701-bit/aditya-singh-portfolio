export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linearly remaps `value` from [inMin, inMax] to [outMin, outMax], clamped to the output range.
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  const t = clamp((value - inMin) / (inMax - inMin), 0, 1);
  return outMin + t * (outMax - outMin);
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

/** Exponential damping, frame-rate independent (Freya Holmér's "lerp smoothing" formula). */
export function damp(current: number, target: number, lambda: number, deltaTime: number): number {
  return lerp(current, target, 1 - Math.exp(-lambda * deltaTime));
}
