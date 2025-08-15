import { baseInstance } from '@/shared/api'

export const categoryApi = {
   async getCategories() {
      return await baseInstance.GET('/categories')
   },
}
