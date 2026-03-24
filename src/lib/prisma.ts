// ========================================
// File: src/lib/prisma.ts
// FINAL — CORRECT (NO datasourceUrl)
// ========================================

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const connectionString = process.env.DATABASE_URL;

console.log("DB URL:", connectionString);

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const pool = new pg.Pool({
  connectionString,
});

const adapter = new PrismaPg(pool);

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter, // ✅ ONLY this
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}