"use client";

import { motion } from "framer-motion";
import { useCursor } from "@/hooks/useCursor";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const { cursorPos, cursorVariant, cursorText } = useCursor();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Enable custom cursor state class on body
    document.body.classList.add("custom-cursor-active");
    setIsVisible(true);

    return () => {
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!isVisible) return null;

  const isMagnetic = cursorVariant === "magnetic";
  const isView = cursorVariant === "view";
  const isText = cursorVariant === "text";
  const isHover = cursorVariant === "hover" || isMagnetic;

  return (
    <>
      {/* Primary Follower Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference hidden lg:block"
        animate={{
          x: cursorPos.x - (isView ? 36 : isHover ? 24 : 6),
          y: cursorPos.y - (isView ? 36 : isHover ? 24 : 6),
          width: isView ? 72 : isHover ? 48 : 12,
          height: isView ? 72 : isHover ? 48 : 12,
          backgroundColor: isView ? "var(--accent)" : "#FAFAFA",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.1,
        }}
      >
        {isView && (
          <div className="w-full h-full flex items-center justify-center text-[10px] uppercase tracking-widest font-bold text-black">
            {cursorText || "View"}
          </div>
        )}
        {isText && (
          <div className="w-full h-full flex items-center justify-center text-[10px] uppercase font-mono text-black">
            {cursorText}
          </div>
        )}
      </motion.div>

      {/* Subtle Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 border border-white/20 rounded-full hidden lg:block"
        animate={{
          x: cursorPos.x - 20,
          y: cursorPos.y - 20,
          scale: isHover ? 1.4 : 1,
          borderColor: isHover ? "var(--accent)" : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        style={{
          width: 40,
          height: 40,
        }}
      />
    </>
  );
}
