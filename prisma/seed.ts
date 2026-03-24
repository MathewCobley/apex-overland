// ========================================
// File: prisma/seed.ts
// ========================================

import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

// ✅ Create pg pool
const pool = new pg.Pool({
  connectionString,
});

// ✅ Create adapter
const adapter = new PrismaPg(pool);

// ✅ Prisma client (REQUIRED for Prisma 7)
const prisma = new PrismaClient({
  adapter,
});

async function main() {
  // Optional: clear existing data to avoid duplicates
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        name: "Apex Base Camp",
        slug: "apex-base-camp",
        brand: "Apex",
        category: "Roof Tents",
        status: "ACTIVE",
        pricePence: 149900,
        isFeatured: true,
        imageUrl: "/products/tent-1.webp",
        shortDescription: "Entry-level adventure roof tent",
      },
      {
        name: "Apex Expedition",
        slug: "apex-expedition",
        brand: "Apex",
        category: "Roof Tents",
        status: "ACTIVE",
        pricePence: 189900,
        isFeatured: true,
        imageUrl: "/products/tent-1.webp",
        shortDescription: "Premium expedition-ready tent",
      },
      {
        name: "Vickywood Peak Pro",
        slug: "vickywood-peak-pro",
        brand: "Vickywood",
        category: "Roof Tents",
        status: "ACTIVE",
        pricePence: 229900,
        isFeatured: true,
        imageUrl: "/products/tent-1.webp",
        shortDescription: "High-end soft shell roof tent",
      },
      {
        name: "EcoFlow River 2",
        slug: "ecoflow-river-2",
        brand: "EcoFlow",
        category: "Power",
        status: "ACTIVE",
        pricePence: 29900,
        isFeatured: true,
        imageUrl: "/products/tent-1.webp",
        shortDescription: "Portable power for off-grid trips",
      },
      {
        name: "Joolca HotTap",
        slug: "joolca-hottap",
        brand: "Joolca",
        category: "Water",
        status: "ACTIVE",
        pricePence: 34900,
        isFeatured: true,
        imageUrl: "/products/tent-1.webp",
        shortDescription: "Instant hot water system",
      },
    ],
  });

  console.log("🌱 Seeded products");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });