import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

import { prisma } from '@/shared/lib/prisma'

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params

   const product = await prisma.product.findUnique({
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
               ingredients: {
                  omit: {
                     variationId: true,
                  },

                  include: {
                     details: {
                        omit: {
                           id: true,
                           createdAt: true,
                           updatedAt: true,
                        },
                     },
                  },
               },
            },
         },
      },

      where: {
         slug,
      },
   })

   if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 })
   }

   return NextResponse.json(product)
}
