// ========================================
// File: src/app/coming-soon/page.tsx
// ========================================

export default function ComingSoonPage() {
    return (
      <section className="relative min-h-[118svh] overflow-hidden">
        {/* Background image */}
        <img
          src="/hero.jpg"
          alt="Apex Overland"
          className="absolute inset-0 h-full w-full object-cover"
        />
  
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
  
        {/* Extra vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.22)_55%,rgba(0,0,0,0.5)_100%)]" />
  
        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[118svh] w-full max-w-7xl items-center px-6 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28">
          <div className="max-w-2xl">
            <img
              src="/apex-mark.svg"
              alt="Apex Overland Logo"
              className="mb-6 w-44 md:mb-8 md:w-52"
            />
  
            <h1 className="mb-6 text-5xl font-bold leading-[0.95] text-white md:mb-8 md:text-7xl">
              Built for
              <br />
              Adventure
            </h1>
  
            <p className="mb-8 max-w-xl text-base leading-7 text-white/78 md:mb-10 md:text-lg">
              Apex Overland is launching soon — premium overland gear and vehicle
              setups designed for real-world use.
            </p>
  
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@apexoverland.co.uk"
                className={[
                  "inline-flex items-center justify-center rounded-full",
                  "px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]",
                  "border border-[#D97706]/40 text-white",
                  "bg-[#D97706]/10 backdrop-blur-sm",
                  "transition-[border-color,background-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "hover:border-[#D97706]/70 hover:bg-[#D97706]/18",
                  "hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(217,119,6,0.22)]",
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