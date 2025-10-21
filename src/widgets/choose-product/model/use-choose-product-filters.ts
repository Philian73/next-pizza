import { useCallback } from 'react'

import { parseAsArrayOf, parseAsString, useQueryStates } from 'nuqs'

import { useProductStore } from '@/widgets/choose-product/model/choice-product-store'

export const useChooseProductFilters = () => {
   const defaultVariationId = useProductStore(state => state.defaultVariationId)

   const getVariationBySizeAndBase = useProductStore(state => state.getVariationBySizeAndBase)

   const [{ variationId, removedIngredients, toppings }, setFilter] = useQueryStates({
      variationId: parseAsString.withDefault(defaultVariationId),
      removedIngredients: parseAsArrayOf(parseAsString).withDefault([]),
      toppings: parseAsArrayOf(parseAsString).withDefault([]),
   })

   const handleSizeChange = useCallback(
      (currentBase: string) => (size: string) => {
         const newVariation = getVariationBySizeAndBase(size, currentBase)

         if (newVariation) {
            setFilter({ variationId: newVariation.id, toppings: [] })
         }
      },
      [setFilter, getVariationBySizeAndBase]
   )

   const handleBaseChange = useCallback(
      (currentSize: string) => (base: string) => {
         const newVariation = getVariationBySizeAndBase(currentSize, base)

         if (newVariation) {
            setFilter({ variationId: newVariation.id, toppings: [] })
         }
      },
      [setFilter, getVariationBySizeAndBase]
   )

   const handleIngredientsChange = useCallback(
      (value: string[]) => {
         setFilter({ removedIngredients: value })
      },
      [setFilter]
   )

   const handleToppingsChange = useCallback(
      (value: string[]) => {
         setFilter({ toppings: value })
      },
      [setFilter]
   )

   return {
      variationId,
      removedIngredients,
      toppings,
      handleSizeChange,
      handleBaseChange,
      handleIngredientsChange,
      handleToppingsChange,
   }
}
