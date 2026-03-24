// ========================================
// File: src/components/home/BrandStrip.tsx
// ========================================

const brands = [
  { name: "EcoFlow", logo: "/brands/ecoflow.png" },
  { name: "Joolca", logo: "/brands/joolca.png" },
  { name: "Dometic", logo: "/brands/dometic.png" },
  { name: "Front Runner", logo: "/brands/frontrunner.png" },
];

export default function BrandStrip() {
  return (
    <section className="py-16 border-t border-zinc-800 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-12 items-center">
        {brands.map((brand) => (
          <img
            key={brand.name}
            src={brand.logo}
            alt={brand.name}
            className="h-8 opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
}