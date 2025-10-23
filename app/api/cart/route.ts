import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

import { prisma } from '@/shared/lib/prisma'

const emptyCart = NextResponse.json({ totalAmount: 0, items: [] })

export async function GET(request: NextRequest) {
   try {
      const token = request.cookies.get('cart-token')?.value ?? ''

      if (!token) {
         return emptyCart
      }

      const userCart = await prisma.cart.findFirst({
         where: { token },
         select: {
            totalAmount: true,
            items: {
               select: {
                  id: true,
                  variation: {
                     select: {
                        id: true,
                        product: {
                           select: {
                              id: true,
                              slug: true,
                              name: true,
                           },
                        },
                        imageUrl: true,
                        price: true,
                     },
                  },
                  quantity: true,
                  toppings: true,
                  removedIngredients: true,
                  subtotal: true, // Добавляем выборку subtotal
               },
            },
         },
      })

      if (!userCart) {
         return emptyCart
      }

      return NextResponse.json({
         totalAmount: userCart.totalAmount.toNumber(),
         items: userCart.items.map(item => ({
            id: item.id,
            product: item.variation.product,
            variationId: item.variation.id,
            quantity: item.quantity,
            imageUrl: item.variation.imageUrl,
            toppings: item.toppings,
            removedIngredients: item.removedIngredients,
            subtotal: item.subtotal.toNumber(),
         })),
      })
   } catch (error) {
      console.error('Error fetching cart:', error)

      return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
   }
}
