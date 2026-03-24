// ========================================
// File: src/components/Header.tsx
// ========================================

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "border-b border-white/10 bg-[#0B0F10]/78 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
          : "border-b border-white/[0.04] bg-[#0B0F10]/42 backdrop-blur-md shadow-none",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex w-full max-w-7xl items-center px-6 md:px-8",
          "transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "py-4 md:py-4" : "py-6 md:py-7",
        ].join(" ")}
      >
        <Link href="/" aria-label="Apex Overland home">
          <img
            src="/apex-mark.svg"
            alt="Apex Overland"
            className={[
              "w-auto transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              scrolled ? "h-10 md:h-11" : "h-12 md:h-13",
            ].join(" ")}
          />
        </Link>
      </div>
    </header>
  );
}