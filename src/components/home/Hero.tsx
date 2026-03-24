// ========================================
// File: src/components/home/Hero.tsx
// ========================================

export default function Hero() {
  return (
    <section className="relative h-[75vh] flex items-center">
      {/* Background image */}
      <img
        src="/hero.jpg"
        alt="Apex Overland"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Elevate Your <br /> Adventure
        </h1>

        <p className="text-lg text-gray-300 mb-8 max-w-xl">
          Premium overland gear for the UK’s wild places
        </p>

        <div className="flex gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold">
            Shop Now
          </button>

          <button className="border border-white/30 px-6 py-3 rounded-md hover:bg-white/10">
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
}