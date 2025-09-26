import type { ApiOptions } from '@/shared/api'

import { baseInstance } from '@/shared/api'

export const productApi = {
   async getProducts(options?: ApiOptions<'getProducts'>) {
      return await baseInstance.GET('/products', {
         ...options,
         next: { revalidate: 60, ...options?.next },
      })
   },

   async getProductBySlug(slug: string, options?: ApiOptions<'getProductBySlug'>) {
      return await baseInstance.GET('/products/{slug}', {
         ...options,
         next: { revalidate: 60, ...options?.next },
         params: {
            path: {
               slug,
            },
            ...options?.params,
         },
      })
   },
}
