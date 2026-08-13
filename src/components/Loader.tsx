"use client";

import { useEffect, useState } from "react";

export interface LoaderProps {
  progress: number;
  isComplete: boolean;
}

const FADE_START_DELAY_MS = 200;
const UNMOUNT_DELAY_MS = 900;

export default function Loader({
  progress,
  isComplete,
}: LoaderProps) {
  const [shouldRender, setShouldRender] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (!isComplete) return;

    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, FADE_START_DELAY_MS);

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, UNMOUNT_DELAY_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [isComplete]);

  if (!shouldRender) {
    return null;
  }

  const clampedProgress = Math.min(
    100,
    Math.max(0, progress)
  );

  return (
    <div
      className={`loader${
        isFadingOut ? " loader--fade-out" : ""
      }`}
      role="status"
      aria-live="polite"
      aria-busy={!isComplete}
    >
      <div className="loader__content">
        <div className="loader__label">
          Loading
        </div>

        <div className="loader__percentage">
          {clampedProgress}%
        </div>

        <div className="loader__bar-track">
          <div
            className="loader__bar-fill"
            style={{
              width: `${clampedProgress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}