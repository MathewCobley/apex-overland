import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const product = await prisma.product.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!product) return notFound();

  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        
        {/* IMAGE */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <img
            src={product.imageUrl || "/placeholder.jpg"}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-center">
          
          <p className="text-sm text-gray-400 mb-2">
            {product.brand}
          </p>

          <h1 className="text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-300 mb-6">
            {product.description || product.shortDescription}
          </p>

          <div className="text-2xl font-semibold mb-6">
            £{product.pricePence / 100}
          </div>

          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-3 font-semibold">
              Add to Enquiry
            </button>

            <button className="border border-white px-6 py-3">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}