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
            select: {
               id: true,
               slug: true,
               name: true,
            },
         },
         variations: {
            omit: {
               productId: true,
               sizeId: true,
            },

            include: {
               size: {
                  include: {
                     toppingPrices: {
                        include: {
                           size: true,
                           ingredient: true,
                        },
                     },
                  },
               },
               foodValue: {
                  omit: {
                     variationId: true,
                  },
               },
               ingredients: {
                  omit: {
                     variationId: true,
                  },

                  include: {
                     details: {
                        select: {
                           name: true,
                           displayName: true,
                           thumbnailUrl: true,
                        },
                     },
                  },
               },
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

   const transformedProducts = products.map(product => ({
      ...product,
      ...(product.price && { price: product.price.toNumber() }),
      variations: product.variations.map(({ size, ...variation }) => {
         const toppings =
            size?.toppingPrices?.map(tp => ({
               id: tp.ingredient.id,
               name: tp.ingredient.name,
               thumbnailUrl: tp.ingredient.thumbnailUrl,
               price: tp.price.toNumber(),
            })) ?? []

         return {
            ...variation,
            price: variation.price.toNumber(),
            size: {
               id: size.id,
               name: size.name,
            },
            toppings,
         }
      }),
   }))

   return NextResponse.json(transformedProducts)
}
