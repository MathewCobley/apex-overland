// ========================================
// File: app/api/health/route.ts
// ========================================

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const productCount = await prisma.product.count();
  const enquiryCount = await prisma.enquiry.count();

  return NextResponse.json({
    ok: true,
    productCount,
    enquiryCount,
  });
}