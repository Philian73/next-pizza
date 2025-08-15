'use client'

import type { Product } from '@/entities/product'
import type { CommandSearchItem } from '@/features/search-with-suggestions'

import { useEffect, useState } from 'react'

import { productApi } from '@/entities/product'
import { CommandSearch } from '@/features/search-with-suggestions'
import { PATHS } from '@/shared/config/routes'
import { useDebounce } from '@/shared/lib/hooks/use-debounce'

export const ProductSearch = () => {
   const [open, setOpen] = useState(false)

   const [products, setProducts] = useState<Product[]>()
   const [search, setSearch] = useState('')

   const debouncedSearch = useDebounce(search, 500)

   useEffect(() => {
      if (open) {
         ;(async () => {
            const { data: products } = await productApi.getProducts({
               params: {
                  query: {
                     ...(!!debouncedSearch && { name: debouncedSearch }),
                  },
               },
            })

            setProducts(products)
         })()
      }
   }, [debouncedSearch, open])

   const productsItems: CommandSearchItem[] = (products ?? []).map(product => ({
      label: product.name,
      imageUrl: product.imageUrl,
      href: PATHS.product(product.id),
      groupBy: product.category.name,
   }))

   return (
      <CommandSearch
         open={open}
         onOpenChange={setOpen}
         search={search}
         onSearchChange={setSearch}
         manualSearch
         items={productsItems}
      />
   )
}
