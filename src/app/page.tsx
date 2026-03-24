// ========================================
// File: src/app/page.tsx
// ========================================

import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStrip from "@/components/home/BrandStrip";
import Categories from "@/components/home/Categories";
import InstallSection from "@/components/home/InstallSection";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <FeaturedProducts />
      <BrandStrip />
      <Categories />
      <InstallSection />
    </main>
  );
}