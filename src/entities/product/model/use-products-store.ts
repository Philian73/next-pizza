'use client'

import type { ProductsStore } from './products-store'
import type { ProductsStoreApi } from './products-store-provider'

import { createContext, useContext } from 'react'
import { useStore } from 'zustand/react'

export const ProductsStoreContext = createContext<ProductsStoreApi | undefined>(undefined)

export const useProductsStore = <T>(selector: (store: ProductsStore) => T): T => {
   const productsStoreContext = useContext(ProductsStoreContext)

   if (!productsStoreContext) {
      throw new Error('useProductsStore must be used within a ProductsStoreProvider')
   }

   return useStore(productsStoreContext, selector)
}
