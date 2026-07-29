"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", 
  "ArrowDown", "ArrowDown", 
  "ArrowLeft", "ArrowRight", 
  "ArrowLeft", "ArrowRight", 
  "b", "a"
];

const ACCENTS = ["electric", "lime", "magenta", "amber"];

export function useEasterEggs() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [currentAccentIndex, setCurrentAccentIndex] = useState(0);
  const [typedBuffer, setTypedBuffer] = useState("");
  const [isSecretModalOpen, setIsSecretModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Konami Code Check
      const key = e.key;
      const expectedKey = KONAMI_CODE[konamiIndex];

      if (key.toLowerCase() === expectedKey.toLowerCase()) {
        const nextIndex = konamiIndex + 1;
        if (nextIndex === KONAMI_CODE.length) {
          // Trigger Konami Easter Egg!
          const nextAccentIndex = (currentAccentIndex + 1) % ACCENTS.length;
          const nextAccent = ACCENTS[nextAccentIndex];
          setCurrentAccentIndex(nextAccentIndex);

          document.documentElement.setAttribute("data-accent", nextAccent);
          
          // Trigger confetti burst
          try {
            confetti({
              particleCount: 80,
              spread: 70,
              origin: { y: 0.6 }
            });
          } catch {
            // fallback
          }

          triggerToast(`⚡ KONAMI CODE ACTIVATED! Theme switched to ${nextAccent.toUpperCase()}`);
          setKonamiIndex(0);
        } else {
          setKonamiIndex(nextIndex);
        }
      } else {
        setKonamiIndex(0);
      }

      // 2. Secret "hello" word trigger check
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return; // Don't trigger when user is typing in form inputs
      }

      if (key.length === 1 && /[a-zA-Z]/.test(key)) {
        const newBuffer = (typedBuffer + key.toLowerCase()).slice(-10);
        setTypedBuffer(newBuffer);

        if (newBuffer.endsWith("hello")) {
          setIsSecretModalOpen(true);
          triggerToast("🎉 Secret 'hello' easter egg unlocked!");
          try {
            confetti({ particleCount: 50, spread: 60 });
          } catch {}
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiIndex, currentAccentIndex, typedBuffer]);

  return {
    isSecretModalOpen,
    setIsSecretModalOpen,
    toastMessage,
    accent: ACCENTS[currentAccentIndex]
  };
}
