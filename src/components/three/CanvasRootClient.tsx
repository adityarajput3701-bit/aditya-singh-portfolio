"use client";

import dynamic from "next/dynamic";

// The 3D scene touches window/canvas and has no useful server-rendered output,
// so it's loaded client-only and excluded from the SSR pass entirely.
// This wrapper exists solely so `ssr: false` is allowed (Next.js requires
// dynamic(..., { ssr: false }) to live inside a Client Component).
const CanvasRoot = dynamic(
  () => import("@/components/three/CanvasRoot").then((mod) => mod.CanvasRoot),
  { ssr: false }
);

export default CanvasRoot;
