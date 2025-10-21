'use client'

import type { ReactNode } from 'react'

import type { ProductsState } from './products-store'

import { useRef } from 'react'

import { createProductsStore } from './products-store'
import { ProductsStoreContext } from './use-products-store'

export type ProductsStoreApi = ReturnType<typeof createProductsStore>

type ProductsStoreProviderProps = {
   children: ReactNode
   initState?: ProductsState
}

export const ProductsStoreProvider = ({ children, initState }: ProductsStoreProviderProps) => {
   const storeRef = useRef<ProductsStoreApi | null>(null)

   if (storeRef.current === null) {
      storeRef.current = createProductsStore(initState)
   }

   return <ProductsStoreContext value={storeRef.current}>{children}</ProductsStoreContext>
}
