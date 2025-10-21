import type { ApiSchemas } from '@/shared/api'

import { create } from 'zustand/react'

type ProductVariation = ApiSchemas['ProductVariation'] & { base: string; baseFull: string }

type ProductState = {
   defaultVariationId: string
   variationsMap: Record<string, ProductVariation>
   bySizeAndBase: Record<string, Record<string, string>>
   sizes: string[]
   bases: string[]
   ingredientsWithoutBasic: ApiSchemas['ProductVariationIngredient'][]
}

type ProductActions = {
   setupProduct: (product: ApiSchemas['Product']) => void
   getVariationById: (id: string) => ProductVariation | undefined
   getVariationBySizeAndBase: (size: string, base: string) => ProductVariation | undefined
   getDefaultVariation: () => ProductVariation
}

type ChoiceProductStore = ProductState & ProductActions

const initState: ProductState = {
   defaultVariationId: '',
   variationsMap: {},
   bySizeAndBase: {},
   sizes: [],
   bases: [],
   ingredientsWithoutBasic: [],
}

export const useProductStore = create<ChoiceProductStore>((set, get) => {
   return {
      ...initState,
      setupProduct: product => {
         const variationsMap: ProductState['variationsMap'] = {}
         const bySizeAndBase: ProductState['bySizeAndBase'] = {}
         const sizesSet = new Set<string>()
         const basesSet = new Set<string>()

         let defaultVariationId = ''

         for (const variation of product.variations) {
            const baseIngredient = variation.ingredients.find(ingredient => ingredient.isBasic)
            const baseFull = baseIngredient?.details.name || ''
            const base = baseIngredient?.details.displayName || baseFull

            variationsMap[variation.id] = { ...variation, base, baseFull }

            bySizeAndBase[variation.size.name] ??= {}
            bySizeAndBase[variation.size.name][base] = variation.id

            sizesSet.add(variation.size.name)

            if (base) {
               basesSet.add(base)
            }

            if (variation.isDefault && !defaultVariationId) {
               defaultVariationId = variation.id
            }
         }

         if (!defaultVariationId) {
            defaultVariationId = product.variations[0]?.id || ''
         }

         set({
            variationsMap,
            bySizeAndBase,
            sizes: Array.from(sizesSet) as string[],
            bases: Array.from(basesSet) as string[],
            ingredientsWithoutBasic:
               variationsMap[defaultVariationId]?.ingredients.filter(
                  ingredient => !ingredient.isBasic
               ) ?? [],
            defaultVariationId,
         })
      },
      getVariationById: id => {
         const { variationsMap } = get()

         return variationsMap[id]
      },
      getVariationBySizeAndBase: (size, base) => {
         const { variationsMap, bySizeAndBase } = get()

         const id = bySizeAndBase[size]?.[base] ?? Object.values(bySizeAndBase[size] || {})?.[0]

         return variationsMap[id]
      },
      getDefaultVariation: () => {
         const { variationsMap, defaultVariationId } = get()

         return variationsMap[defaultVariationId]
      },
   }
})
