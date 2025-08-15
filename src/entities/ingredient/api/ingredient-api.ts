import { baseInstance } from '@/shared/api'

export const ingredientApi = {
   async getIngredients() {
      return await baseInstance.GET('/ingredients')
   },
}
