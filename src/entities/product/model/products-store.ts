import type { ApiSchemas } from '@/shared/api'

import { createStore } from 'zustand/vanilla'

type Product = ApiSchemas['Product']

export type ProductsState = {
   products: Product[]
   productsSlugMap: Record<string, Product>
}

type ProductsActions = {
   getProductBySlug: (slug: string) => Product | undefined
}

export type ProductsStore = ProductsState & ProductsActions

const defaultInitState: ProductsState = {
   products: [],
   productsSlugMap: {},
}

export const createProductsStore = (initState: ProductsState = defaultInitState) => {
   return createStore<ProductsStore>()((_, get) => ({
      ...initState,
      getProductBySlug: slug => get().productsSlugMap[slug],
   }))
}
