"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data/projects";

/**
 * Renders a real project screenshot when one exists. `src` picks a specific
 * asset (e.g. a gallery slot); omit it to use the project's hero image, or
 * pass `null` to force the abstract SVG art (an empty gallery slot).
 */
export function ProjectVisual({
  project,
  className = "",
  src,
}: {
  project: Project;
  className?: string;
  src?: string | null;
}) {
  const image = src === null ? undefined : (src ?? project.media?.hero);
  const [bg, accent, tertiary] = project.palette;

  if (image) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ background: bg }}>
        <Image
          src={image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: bg }}>
      <svg viewBox="0 0 800 600" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <Shape shape={project.shape} accent={accent} tertiary={tertiary} />
      </svg>
    </div>
  );
}

function Shape({ shape, accent, tertiary }: { shape: Project["shape"]; accent: string; tertiary: string }) {
  switch (shape) {
    case "grid":
      return (
        <g>
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => {
              const active = (row + col) % 5 === 0;
              return (
                <motion.rect
                  key={`${row}-${col}`}
                  x={col * 100}
                  y={row * 100}
                  width={96}
                  height={96}
                  fill={active ? accent : "transparent"}
                  stroke={tertiary}
                  strokeOpacity={0.15}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: active ? 0.9 : 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (row + col) * 0.02 }}
                />
              );
            })
          )}
        </g>
      );
    case "wave":
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <motion.path
              key={i}
              d={`M -50 ${180 + i * 90} C 200 ${80 + i * 90}, 500 ${300 + i * 90}, 850 ${150 + i * 90}`}
              stroke={i % 2 === 0 ? accent : tertiary}
              strokeOpacity={0.7}
              strokeWidth={2}
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </g>
      );
    case "stack":
      return (
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.rect
              key={i}
              x={150 + i * 14}
              y={480 - i * 70}
              width={500 - i * 28}
              height={56}
              rx={10}
              fill={i === 2 ? accent : "none"}
              stroke={i === 2 ? "none" : tertiary}
              strokeOpacity={0.4}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            />
          ))}
        </g>
      );
    case "orbit":
      return (
        <g>
          <circle cx={400} cy={300} r={2} fill={accent} />
          {[80, 150, 220].map((r, i) => (
            <circle key={r} cx={400} cy={300} r={r} fill="none" stroke={tertiary} strokeOpacity={0.25} />
          ))}
          {[80, 150, 220].map((r, i) => (
            <motion.circle
              key={`dot-${r}`}
              r={7}
              fill={accent}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 14 + i * 6, repeat: Infinity, ease: "linear" }}
              style={{ originX: "400px", originY: "300px" }}
              cx={400 + r}
              cy={300}
            />
          ))}
        </g>
      );
    case "aperture":
    default:
      return (
        <g>
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = (i / 10) * Math.PI * 2;
            const x2 = Math.round((400 + Math.cos(angle) * 260) * 100) / 100;
            const y2 = Math.round((300 + Math.sin(angle) * 260) * 100) / 100;
            return (
              <motion.line
                key={i}
                x1={400}
                y1={300}
                x2={x2}
                y2={y2}
                stroke={i % 3 === 0 ? accent : tertiary}
                strokeOpacity={0.5}
                strokeWidth={1.5}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.04 }}
              />
            );
          })}
          <circle cx={400} cy={300} r={60} fill="none" stroke={accent} strokeWidth={2} />
        </g>
      );
  }
}
