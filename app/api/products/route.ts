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
         traits: {
            omit: {
               productId: true,
            },
         },
         category: {
            omit: {
               description: true,
               createdAt: true,
               updatedAt: true,
            },
         },
         variations: {
            omit: {
               productId: true,
               sizeId: true,
            },
            include: {
               size: true,
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
