import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

import { prisma } from '@/shared/lib/prisma'

export async function GET(request: NextRequest) {
   const name = request.nextUrl.searchParams.get('name') ?? ''

   const products = await prisma.product.findMany({
      omit: {
         categoryId: true,
      },
      include: {
         items: true,
         category: {
            select: {
               id: true,
               slug: true,
               name: true,
            },
         },
      },
      where: {
         name: {
            contains: name,
            mode: 'insensitive',
         },
      },
   })

   return NextResponse.json(products)
}
