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
               size: {
                  include: {
                     toppingPrices: {
                        include: {
                           size: true,
                           topping: {
                              include: {
                                 ingredient: true,
                              },
                           },
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
         name: {
            contains: name,
            mode: 'insensitive',
         },
      },
   })

   const transformedProducts = products.map(product => ({
      ...product,
      variations: product.variations.map(({ size, ...variation }) => {
         const toppings =
            size?.toppingPrices?.map(tp => ({
               id: tp.topping.id,
               name: tp.topping.ingredient.name,
               imageUrl: tp.topping.ingredient.thumbnailUrl,
               price: Number(tp.price),
            })) ?? []

         return {
            ...variation,
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
