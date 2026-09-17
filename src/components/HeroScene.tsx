"use client";

import { useMemo, useRef, type MutableRefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import type { MotionValue } from "framer-motion";
import * as THREE from "three";

type PointerRef = MutableRefObject<{ x: number; y: number }>;

// The nexus object keeps Nexushouse's signature lime in both themes, like
// the portfolio artwork, it's an illustration rather than flat UI text, so
// it isn't bound by the darker light-mode accent text needs for contrast.
// A metallic material in that dark olive would just render as a murky blob.
const OBJECT_ACCENT = "#d6ff3f";

/**
 * The "nexus" object: a distorted glassy core (the point where things meet)
 * inside a slower counter-rotating wireframe shell (the connections around
 * it), with a thin halo of node-points. Pointer movement tilts the whole
 * group slightly; scroll (read imperatively from the same MotionValue the
 * 2D headline uses, so it never fights it) shrinks and fades it out as the
 * headline takes over.
 */
function NexusObject({
  accent,
  scrollProgress,
  pointerRef,
}: {
  accent: string;
  scrollProgress: MotionValue<number>;
  pointerRef: PointerRef;
}) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const nodePositions = useMemo(() => {
    const count = 60;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.6 + Math.sin(i * 12.9898) * 0.15;
      const theta = (i / count) * Math.PI * 2 * 3.1;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    const t = scrollProgress.get();
    // Fully visible only while the first, short headline line ("WE BUILD")
    // is on screen. Dissolves before the wider lines beneath it would
    // otherwise collide with it, then stays gone until the object's own
    // moment has passed rather than jarringly popping back.
    const fade = 1 - Math.min(1, Math.max(0, (t - 0.06) / 0.32));
    const scale = THREE.MathUtils.lerp(0.55, 0.9, fade) * Math.min(1, viewport.width / 8);

    if (core.current) {
      core.current.rotation.x += delta * 0.12;
      core.current.rotation.y += delta * 0.18;
    }
    if (shell.current) {
      shell.current.rotation.x -= delta * 0.06;
      shell.current.rotation.y -= delta * 0.1;
    }
    if (group.current) {
      const targetTiltX = pointerRef.current.y * 0.2;
      const targetTiltY = pointerRef.current.x * 0.25;
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetTiltX, 0.04);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetTiltY, 0.04);
      group.current.scale.setScalar(scale);
      group.current.position.x = Math.min(1.7, viewport.width * 0.22);
      group.current.position.y = THREE.MathUtils.lerp(-0.1, 0.3, fade) - 0.1;
      group.current.visible = fade > 0.02;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.15, 4]} />
        <MeshDistortMaterial
          color={accent}
          roughness={0.15}
          metalness={0.6}
          distort={0.35}
          speed={1.4}
          envMapIntensity={0.6}
        />
      </mesh>
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.75, 1]} />
        <meshBasicMaterial color={accent} wireframe transparent opacity={0.28} />
      </mesh>
      <Points positions={nodePositions} stride={3}>
        <PointMaterial color={accent} size={0.045} transparent opacity={0.75} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

export function HeroScene({
  theme,
  scrollProgress,
  pointerRef,
  reduceQuality,
}: {
  theme: "dark" | "light";
  scrollProgress: MotionValue<number>;
  pointerRef: PointerRef;
  reduceQuality: boolean;
}) {
  const accent = OBJECT_ACCENT;

  return (
    <Canvas
      dpr={reduceQuality ? [1, 1.2] : [1, 1.8]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="pointer-events-none !absolute !inset-0"
    >
      <ambientLight intensity={theme === "dark" ? 0.5 : 0.85} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <pointLight position={[-4, -2, 2]} intensity={0.6} color={accent} />
      <NexusObject accent={accent} scrollProgress={scrollProgress} pointerRef={pointerRef} />
      {!reduceQuality && (
        <EffectComposer>
          <Bloom
            intensity={theme === "dark" ? 0.65 : 0.4}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      )}
    </Canvas>
  );
}
