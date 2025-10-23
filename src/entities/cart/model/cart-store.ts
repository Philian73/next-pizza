import type { ApiSchemas } from '@/shared/api'

import { create } from 'zustand/react'

import { cartApi } from '@/entities/cart'

type CartState = {
   isLoading: boolean
   isError: boolean
   totalAmount: number
   items: ApiSchemas['CartItem'][]
}

type CartActions = {
   fetchCartItems: () => Promise<void>
   updateCartItem: (
      cartItemId: string,
      values: {
         quantity: number
      }
   ) => Promise<void>
   addCartItem: (values: { quantity: number }) => Promise<void>
   removeCartItem: (id: string) => Promise<void>
}

type CartStore = CartState & CartActions

const defaultInitState: CartState = {
   isLoading: false,
   isError: false,
   totalAmount: 0,
   items: [],
}

export const useCartStore = create<CartStore>((set, _get) => ({
   ...defaultInitState,
   fetchCartItems: async () => {
      set({ isLoading: true })

      try {
         const { data: cart } = await cartApi.getCart()

         set({ ...cart })
      } catch (error) {
         console.error(error)
         set({ isError: true })
      } finally {
         set({ isLoading: false })
      }
   },
   updateCartItem: async (cartItemId, values) => {
      set({ isLoading: true })

      try {
         const { data: updatedCart } = await cartApi.updateCartItem({
            body: {
               cartItemId,
               ...values,
            },
         })

         set({ ...updatedCart })
      } catch (error) {
         console.error(error)
         set({ isError: true })
      } finally {
         set({ isLoading: false })
      }
   },
   addCartItem: async () => {},
   removeCartItem: async () => {},
}))
