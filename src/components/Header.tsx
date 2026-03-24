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
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl",
        "ease-[cubic-bezier(0.22,1,0.36,1)] transition-[background-color,border-color,box-shadow] duration-500",
        scrolled
          ? "border-white/10 bg-[#0B0F10]/96 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
          : "border-white/[0.06] bg-[#0B0F10]/88 shadow-[0_4px_24px_rgba(0,0,0,0.25)]",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-8",
          "ease-[cubic-bezier(0.22,1,0.36,1)] transition-[padding] duration-500",
          scrolled ? "py-3" : "py-6",
        ].join(" ")}
      >
        {/* LOGO */}
        <Link href="/" aria-label="Apex Overland home">
          <img
            src="/apex-mark.svg"
            alt="Apex Overland"
            className={[
              "w-auto",
              "ease-[cubic-bezier(0.22,1,0.36,1)] transition-[height] duration-500",
              scrolled ? "h-10 md:h-12" : "h-14 md:h-16",
            ].join(" ")}
          />
        </Link>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={[
              "inline-flex items-center justify-center rounded-full border text-xs font-semibold uppercase tracking-[0.2em] text-white",
              "ease-[cubic-bezier(0.22,1,0.36,1)]",
              "transition-[padding,border-color,background-color,transform,box-shadow] duration-500",
              scrolled
                ? "px-4 py-1.5 border-[#D97706]/40 bg-[#D97706]/15"
                : "px-5 py-2 border-[#D97706]/30 bg-[#D97706]/10",
              "hover:border-[#D97706]/70 hover:bg-[#D97706]/25 hover:scale-[1.05] hover:shadow-lg hover:shadow-[#D97706]/20",
            ].join(" ")}
          >
            Enquire
          </Link>
        </div>
      </div>

      {/* ACCENT LINE */}
      <div
        className={[
          "h-[1px] w-full bg-gradient-to-r from-transparent via-[#D97706]/50 to-transparent",
          "ease-[cubic-bezier(0.22,1,0.36,1)] transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
    </header>
  );
}
