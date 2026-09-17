"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

export function MagneticButton({
  children,
  className = "",
  cursor,
}: {
  children: ReactNode;
  className?: string;
  cursor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: relX * 0.35, y: relY * 0.35 });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 200, damping: 14, mass: 0.4 }}
      className={className}
      data-cursor={cursor}
    >
      {children}
    </motion.div>
  );
}
