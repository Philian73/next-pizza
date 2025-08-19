import type { ApiOptions } from '@/shared/api'

import { baseInstance } from '@/shared/api'

export const productApi = {
   async getProducts(options?: ApiOptions<'getProducts'>) {
      return await baseInstance.GET('/products', {
         next: { revalidate: 60 },
         ...options,
      })
   },

   async getProductBySlug(slug: string, options?: ApiOptions<'getProductBySlug'>) {
      return await baseInstance.GET('/products/{slug}', {
         next: { revalidate: 60 },
         ...options,
         params: {
            path: {
               slug,
            },
            ...options?.params,
         },
      })
   },
}
