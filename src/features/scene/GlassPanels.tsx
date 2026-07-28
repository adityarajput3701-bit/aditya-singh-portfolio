"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";

interface PanelConfig {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  bobSpeed: number;
  bobOffset: number;
  spinSpeed: number;
}

const PANEL_COUNT = 6;

function generatePanels(): PanelConfig[] {
  const panels: PanelConfig[] = [];
  for (let i = 0; i < PANEL_COUNT; i += 1) {
    const angle = (i / PANEL_COUNT) * Math.PI * 2;
    const radius = 5.5 + (i % 2) * 1.5;
    panels.push({
      position: [Math.cos(angle) * radius, Math.sin(i * 1.7) * 1.4 - 0.5, Math.sin(angle) * radius - 8],
      rotation: [Math.random() * 0.3, angle, Math.random() * 0.2],
      scale: 0.9 + (i % 3) * 0.25,
      bobSpeed: 0.3 + Math.random() * 0.2,
      bobOffset: Math.random() * Math.PI * 2,
      spinSpeed: 0.05 + Math.random() * 0.05,
    });
  }
  return panels;
}

interface GlassPanelsProps {
  frozen?: boolean;
}

export function GlassPanels({ frozen = false }: GlassPanelsProps) {
  const panels = useMemo(generatePanels, []);
  const groupRefs = useRef<Array<Group | null>>([]);

  useFrame((state) => {
    if (frozen) return;
    const elapsed = state.clock.elapsedTime;

    panels.forEach((panel, index) => {
      const group = groupRefs.current[index];
      if (!group) return;
      group.position.y = panel.position[1] + Math.sin(elapsed * panel.bobSpeed + panel.bobOffset) * 0.4;
      group.rotation.y = panel.rotation[1] + elapsed * panel.spinSpeed;
    });
  });

  return (
    <>
      {panels.map((panel, index) => (
        <group
          key={`panel-${index}`}
          ref={(node) => {
            groupRefs.current[index] = node;
          }}
          position={panel.position}
          rotation={panel.rotation}
        >
          <mesh scale={panel.scale}>
            <planeGeometry args={[1.6, 2.1]} />
            <meshPhysicalMaterial
              transmission={0.95}
              thickness={0.4}
              roughness={0.08}
              ior={1.5}
              clearcoat={1}
              clearcoatRoughness={0.05}
              metalness={0.1}
              color="#0d1420"
              attenuationColor="#4a90e2"
              attenuationDistance={2}
              envMapIntensity={1.2}
            />
          </mesh>
        </group>
      ))}
    </>
  );
}
