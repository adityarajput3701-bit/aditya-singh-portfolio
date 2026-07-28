"use client";

import { useEffect } from "react";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

export function LightRig() {
  useEffect(() => {
    RectAreaLightUniformsLib.init();
  }, []);

  return (
    <>
      <ambientLight intensity={0.25} color="#0d1420" />
      <directionalLight position={[6, 8, 4]} intensity={0.6} color="#edeff3" />
      <pointLight position={[-4, 2, -2]} intensity={8} color="#e8a94a" distance={14} decay={2} />
      <rectAreaLight
        position={[0, 4, -10]}
        width={12}
        height={6}
        intensity={3}
        color="#4a90e2"
        rotation={[-Math.PI / 3, 0, 0]}
      />
    </>
  );
}
