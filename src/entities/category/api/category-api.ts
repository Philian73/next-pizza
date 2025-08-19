import { baseInstance } from '@/shared/api'

export const categoryApi = {
   async getCategories() {
      return await baseInstance.GET('/categories', {
         next: { revalidate: 60 * 60 }, // 1 hour
      })
   },
}
