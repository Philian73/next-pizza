import type { ApiOptions } from '@/shared/api'

import { baseInstance } from '@/shared/api'

export const ingredientApi = {
   async getIngredients(options?: ApiOptions<'getIngredients'>) {
      return await baseInstance.GET('/ingredients', {
         next: { revalidate: 60 * 60 }, // 1 hour
         ...options,
      })
   },
}
