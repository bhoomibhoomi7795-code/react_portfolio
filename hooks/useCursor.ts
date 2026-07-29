"use client";

import { useEffect, useState } from "react";

export type CursorVariant = "default" | "hover" | "magnetic" | "text" | "view" | "hidden";

export function useCursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Check element under cursor for cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttrEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorAttrEl) {
        const variant = cursorAttrEl.getAttribute("data-cursor") as CursorVariant;
        const text = cursorAttrEl.getAttribute("data-cursor-text") || "";
        setCursorVariant(variant || "hover");
        setCursorText(text);
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return { cursorPos, cursorVariant, cursorText, setCursorVariant, setCursorText };
}
