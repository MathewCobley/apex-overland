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
      setScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-[background-color,border-color,backdrop-filter,padding,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "border-b border-white/10 bg-[#0B0F10]/72 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
          : "border-b border-transparent bg-black/10 backdrop-blur-md",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex w-full max-w-7xl items-center px-6 md:px-8",
          "transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "py-4" : "py-6",
        ].join(" ")}
      >
        <Link href="/" aria-label="Apex Overland home">
          <img
            src="/apex-mark.svg"
            alt="Apex Overland"
            className={[
              "w-auto transition-[height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              scrolled ? "h-10 md:h-11" : "h-12 md:h-14",
            ].join(" ")}
          />
        </Link>
      </div>
    </header>
  );
}