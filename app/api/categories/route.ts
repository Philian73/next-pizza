import { NextResponse } from 'next/server'

import { prisma } from '@/shared/lib/prisma'

export async function GET() {
   const categories = await prisma.category.findMany()

   return NextResponse.json(categories)
}
