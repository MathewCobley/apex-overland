// ========================================
// File: src/components/home/FeaturedProducts.tsx
// ========================================

import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function FeaturedProducts() {
  const products = await prisma.product.findMany({
    where: {
      category: "Roof Tents",
      status: "ACTIVE",
    },
    take: 4,
  });

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Featured Roof Tents</h2>
        <p className="text-gray-400 mt-2">
          Premium expedition-ready setups
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group"
          >
            <div className="relative rounded-xl overflow-hidden bg-zinc-900">

              {/* Image */}
              <div className="aspect-square bg-black overflow-hidden">
                <img
                  src={product.imageUrl || "/products/tent-1.webp"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition" />

              {/* Content */}
              <div className="absolute bottom-0 p-4">
                <h3 className="font-semibold text-white">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-300">
                  {product.shortDescription}
                </p>

                <button className="mt-3 bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm rounded-md">
                  Shop Now
                </button>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}