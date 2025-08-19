import type { Product } from '@/entities/product'

import { productApi } from '@/entities/product'

import { ProductsGroupList } from './products-group-list'

export const Products = async () => {
   const response = await productApi.getProducts()
   const products = response?.data ?? []

   const map = products.reduce(
      (acc, product) => {
         if (!acc[product.category.name]) {
            acc[product.category.name] = []
         }

         acc[product.category.name].push(product)

         return acc
      },
      {} as Record<string, Product[]>
   )

   return (
      <div className={'flex flex-col gap-6'}>
         {Object.entries(map).map(([category, [product]]) => {
            return (
               <ProductsGroupList
                  heading={category}
                  key={category}
                  products={map[category]}
                  categorySlug={product.category.slug}
               />
            )
         })}
      </div>
   )
}
