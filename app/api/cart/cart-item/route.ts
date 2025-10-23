import type { NextRequest } from 'next/server'

import { Prisma } from '@prisma/client'
import { NextResponse } from 'next/server'

import { prisma } from '@/shared/lib/prisma'

type UpdateCartItemRequest = {
   cartItemId: string
   quantity: number
}

type Topping = {
   id: string
   name: string
   price: Prisma.Decimal
}

export async function PATCH(request: NextRequest) {
   try {
      const token = request.cookies.get('cart-token')?.value ?? ''

      if (!token) {
         return NextResponse.json({ error: 'Cart token is required' }, { status: 400 })
      }

      const { quantity, cartItemId }: UpdateCartItemRequest = await request.json()

      const updatedCart = await prisma.$transaction(async tx => {
         const cartItem = await tx.cartItem.findFirst({
            where: { id: cartItemId },
            select: {
               toppings: true,
               variation: { select: { price: true } },
               quantity: true,
            },
         })

         if (!cartItem) {
            return { totalAmount: 0, items: [] }
         }

         const subtotal = (cartItem.toppings as unknown as Topping[])
            .reduce(
               (acc, { price }) => acc.add(price),
               new Prisma.Decimal(cartItem.variation.price)
            )
            .mul(quantity)
            .toNumber()

         await tx.cartItem.update({
            where: { id: cartItemId },
            data: { subtotal, quantity },
         })

         const updatedCart = await tx.cart.update({
            where: { token },
            data: {
               totalAmount: {
                  set: await tx.cartItem
                     .aggregate({
                        where: { cart: { token } },
                        _sum: { subtotal: true },
                     })
                     .then(res => res._sum.subtotal ?? 0),
               },
            },
            select: {
               totalAmount: true,
               items: {
                  select: {
                     id: true,
                     variation: {
                        select: {
                           id: true,
                           product: { select: { id: true, slug: true, name: true } },
                           imageUrl: true,
                           price: true,
                        },
                     },
                     quantity: true,
                     toppings: true,
                     removedIngredients: true,
                     subtotal: true,
                  },
               },
            },
         })

         return {
            totalAmount: updatedCart.totalAmount.toNumber(),
            items: updatedCart.items.map(item => ({
               id: item.id,
               product: item.variation.product,
               variationId: item.variation.id,
               quantity: item.quantity,
               imageUrl: item.variation.imageUrl,
               toppings: item.toppings,
               removedIngredients: item.removedIngredients,
               subtotal: item.subtotal.toNumber(),
            })),
         }
      })

      return NextResponse.json(updatedCart)
   } catch (error) {
      console.error('Error updating cart item:', error)

      return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
   }
}
