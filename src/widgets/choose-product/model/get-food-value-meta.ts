export function getFoodValueMeta(food: string) {
   const FOOD_VALUES = {
      weight: {
         label: 'Вес',
         unit: 'г',
      },
      proteins: {
         label: 'Белки',
         unit: 'г',
      },
      carbohydrates: {
         label: 'Углеводы',
         unit: 'г',
      },
      fats: {
         label: 'Жиры',
         unit: 'г',
      },
      calories: {
         label: 'Энерг.ценность',
         unit: 'ккал',
      },
   } as const

   return FOOD_VALUES[food as keyof typeof FOOD_VALUES] ?? null
}
