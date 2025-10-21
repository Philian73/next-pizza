'use client'

import type { ApiSchemas } from '@/shared/api'

import { useProductsStore } from '@/entities/product'

import { ProductsGroupList } from './products-group-list'

export const Products = () => {
   const products = useProductsStore(state => state.products)

   const map = products?.reduce(
      (acc, product) => {
         if (!acc[product.category.name]) {
            acc[product.category.name] = []
         }

         acc[product.category.name].push(product)

         return acc
      },
      {} as Record<string, ApiSchemas['Product'][]>
   )

   return (
      <div className={'flex flex-col gap-6'}>
         {Object.entries(map).map(([category, products]) => {
            return (
               <ProductsGroupList
                  heading={category}
                  key={category}
                  products={products}
                  categorySlug={products[0]?.category.slug ?? ''}
               />
            )
         })}
      </div>
   )
}
