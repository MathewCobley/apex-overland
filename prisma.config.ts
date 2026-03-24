import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  datasource: {
    url: process.env.DATABASE_URL,
  },

  client: {
    engineType: "client",
  },

  // ✅ ADD THIS
  migrations: {
    seed: "tsx prisma/seed.ts",
  },
});