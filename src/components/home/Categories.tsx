// ========================================
// File: src/components/home/Categories.tsx
// ========================================

const categories = [
  { name: "Power", slug: "power" },
  { name: "Water", slug: "water" },
  { name: "Cooling", slug: "cooling" },
  { name: "Accessories", slug: "accessories" },
];

export default function Categories() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Shop by Category</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="bg-zinc-900 p-10 text-center rounded-xl hover:bg-zinc-800 transition"
          >
            <h3 className="text-xl font-semibold">{cat.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}