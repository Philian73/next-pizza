import type { ApiOptions } from '@/shared/api'

import { baseInstance } from '@/shared/api'

export const categoryApi = {
   async getCategories(options?: ApiOptions<'getCategories'>) {
      return await baseInstance.GET('/categories', {
         ...options,
         next: { revalidate: 60 * 60, ...options?.next }, // 1 hour
      })
   },
}
