// ========================================
// File: src/app/coming-soon/page.tsx
// ========================================

export default function ComingSoonPage() {
    return (
      <section className="relative min-h-screen flex items-center">
        {/* Background image */}
        <img
          src="/hero.jpg"
          alt="Apex Overland"
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />
  
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 mb-6">
              Coming Soon
            </div>
  
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
  
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@apexoverland.co.uk"
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold text-black"
              >
                Get in touch
              </a>
  
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="border border-white/30 px-6 py-3 rounded-md hover:bg-white/10 text-white"
              >
                Follow launch
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  