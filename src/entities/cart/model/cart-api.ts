import type { ApiOptions } from '@/shared/api'

import { baseInstance } from '@/shared/api'

export const cartApi = {
   async getCart(options?: ApiOptions<'getCart'>) {
      return await baseInstance.GET('/cart', {
         cache: 'no-store',
         ...options,
         next: { revalidate: 0, ...options?.next },
      })
   },

   async updateCartItem(options: ApiOptions<'updateCartItem'>) {
      return await baseInstance.PATCH('/cart/cart-item', {
         ...options,
      })
   },
}
