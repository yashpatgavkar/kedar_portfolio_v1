"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, useSpring } from "motion/react";
import {
  Aperture,
  Brush,
  Image as ImageIcon,
  Layers3,
  MousePointer2,
  Palette,
  PenTool,
  Sparkles,
  Type,
} from "lucide-react";
import { cn } from "@/lib/utils";

const DESIGN_KEYS = [
  { short: "Ps", label: "Photoshop", accent: "#31A8FF", icon: ImageIcon },
  { short: "Ai", label: "Illustrator", accent: "#FF9A00", icon: PenTool },
  { short: "Id", label: "InDesign", accent: "#FF3366", icon: Type },
  { short: "Ae", label: "After Effects", accent: "#9999FF", icon: Sparkles },
  { short: "Pr", label: "Premiere Pro", accent: "#9999FF", icon: Aperture },
  { short: "Fg", label: "Figma", accent: "#F24E1E", icon: MousePointer2 },
  { short: "Pn", label: "Pen Tool", accent: "#34D399", icon: PenTool },
  { short: "Ly", label: "Layers", accent: "#60A5FA", icon: Layers3 },
  { short: "Ty", label: "Typography", accent: "#F472B6", icon: Type },
  { short: "Br", label: "Brush", accent: "#FB7185", icon: Brush },
  { short: "Cv", label: "Canva", accent: "#00C4CC", icon: Palette },
  { short: "CD", label: "CorelDRAW", accent: "#78BE20", icon: PenTool },
];

export default function DesignKeyboard() {
  const keyboardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeKey, setActiveKey] = useState("Photoshop");
  const rotateX = useSpring(0, { stiffness: 130, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 130, damping: 18 });

  const moveKeyboard = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const rect = keyboardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -7);
    rotateY.set(x * 9);
  };

  const resetKeyboard = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="pointer-events-auto mx-auto w-full max-w-6xl px-3 sm:px-6">
      <div className="mb-5 flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted-foreground">
          My creative toolkit — tap or hover a key
        </p>
        <motion.span
          key={activeKey}
          initial={reduceMotion ? false : { opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur"
        >
          {activeKey}
        </motion.span>
      </div>

      <div className="[perspective:1200px]">
        <motion.div
          ref={keyboardRef}
          onPointerMove={moveKeyboard}
          onPointerLeave={resetKeyboard}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={reduceMotion ? false : { opacity: 0, y: 36, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative overflow-hidden rounded-[1.5rem] border border-white/10 p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.75)] sm:rounded-[2rem] sm:p-5",
            "bg-gradient-to-br from-zinc-700 via-zinc-900 to-black",
            "after:pointer-events-none after:absolute after:inset-x-6 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent"
          )}
        >
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {DESIGN_KEYS.map(({ short, label, accent, icon: Icon }) => (
              <motion.button
                type="button"
                key={label}
                aria-label={label}
                onFocus={() => setActiveKey(label)}
                onPointerEnter={() => setActiveKey(label)}
                onClick={() => setActiveKey(label)}
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.025 }}
                whileTap={{ y: 3, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                style={{
                  "--key-accent": accent,
                  transformStyle: "preserve-3d",
                } as React.CSSProperties}
                className={cn(
                  "group relative min-h-20 overflow-hidden rounded-xl border border-white/10 bg-zinc-800 px-2 py-3 text-left text-white",
                  "shadow-[0_6px_0_#09090b,0_11px_18px_rgba(0,0,0,0.5)] outline-none transition-colors",
                  "hover:border-[var(--key-accent)] focus-visible:border-[var(--key-accent)] focus-visible:ring-2 focus-visible:ring-[var(--key-accent)]"
                )}
              >
                <span
                  aria-hidden
                  className="absolute -right-4 -top-4 size-16 rounded-full bg-[var(--key-accent)] opacity-15 blur-xl transition-opacity group-hover:opacity-45"
                />
                <span className="relative flex items-start justify-between gap-1">
                  <span className="font-display text-lg font-bold leading-none sm:text-xl">
                    {short}
                  </span>
                  <Icon className="size-4 text-[var(--key-accent)] sm:size-5" />
                </span>
                <span className="relative mt-4 block truncate text-[10px] font-medium text-zinc-400 transition-colors group-hover:text-white sm:text-xs">
                  {label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
