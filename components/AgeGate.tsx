"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "leila-age-verified";

export function AgeGate() {
  const [visible, setVisible] = useState(false);
  const confirmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const verified = localStorage.getItem(STORAGE_KEY);
    if (!verified) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      confirmRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        window.location.href = "https://www.google.com";
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible]);

  function handleConfirm() {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  function handleLeave() {
    window.location.href = "https://www.google.com";
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div className="w-full max-w-sm rounded-2xl border border-green-200/30 bg-black/60 p-8 text-center shadow-2xl backdrop-blur-md">
        <p
          id="age-gate-title"
          className="font-serif text-2xl tracking-wide text-white"
        >
          Adults only
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          This page contains links to adult content. You must be 18 or older to
          enter.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <button
            ref={confirmRef}
            type="button"
            onClick={handleConfirm}
            className="rounded-full bg-green-200 px-6 py-3 text-sm font-medium tracking-wide text-black transition-colors hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-200"
          >
            I am 18+
          </button>
          <button
            type="button"
            onClick={handleLeave}
            className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/60 transition-colors hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-200"
          >
            Leave
          </button>
        </div>
      </div>
    </div>
  );
}
