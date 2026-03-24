// ========================================
// File: src/app/coming-soon/page.tsx
// ========================================

export default function ComingSoonPage() {
    return (
      <section className="relative flex min-h-[calc(100dvh-7rem)] items-center">
        {/* Background image */}
        <img
          src="/hero.jpg"
          alt="Apex Overland"
          className="absolute inset-0 h-full w-full object-cover"
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />
  
        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <div className="max-w-2xl">
            {/* Logo */}
            <img
              src="/apex-mark.svg"
              alt="Apex Overland Logo"
              className="w-44 md:w-52 mb-6"
            />
  
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Built for <br /> Adventure
            </h1>
  
            {/* Subtext */}
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Apex Overland is launching soon — premium overland gear and vehicle setups designed for real-world use.
            </p>
  
            {/* CTA (premium version) */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@apexoverland.co.uk"
                className={[
                  "inline-flex items-center justify-center rounded-full",
                  "px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]",
                  "text-white border border-[#D97706]/40",
                  "bg-[#D97706]/10 backdrop-blur-sm",
                  "ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "transition-[border-color,background-color,transform,box-shadow] duration-500",
                  "hover:border-[#D97706]/70 hover:bg-[#D97706]/20",
                  "hover:scale-[1.04] hover:shadow-[0_10px_30px_rgba(217,119,6,0.25)]",
                ].join(" ")}
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }