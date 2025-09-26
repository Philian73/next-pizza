'use client'

import type { ComponentProps } from 'react'

import type { ApiSchemas } from '@/shared/api'

import { useEffect, useRef } from 'react'

import { ProductCard } from '@/entities/product'
import { useIntersection } from '@/shared/lib/hooks/use-intersection'
import { Typography } from '@/shared/ui/typography'
import { useCategoryNavStore } from '@/widgets/top-bar'

type ProductsGroupListProps = {
   heading: string
   products: ApiSchemas['Product'][]
   categorySlug: string
} & Omit<ComponentProps<'section'>, 'children' | 'ref'>

export const ProductsGroupList = ({
   heading,
   categorySlug,
   products,
   ...rest
}: ProductsGroupListProps) => {
   const setActiveCategory = useCategoryNavStore(state => state.setActiveCategory)

   const intersectionRef = useRef<HTMLDivElement>(null)
   const intersection = useIntersection(intersectionRef, {
      threshold: 0.4,
   })

   useEffect(() => {
      if (intersection?.isIntersecting) {
         setActiveCategory(categorySlug)
      }
   }, [categorySlug, setActiveCategory, intersection?.isIntersecting])

   return (
      <section id={categorySlug} {...rest} ref={intersectionRef}>
         <Typography className={'mb-5'} variant={'h2'}>
            {heading}
         </Typography>

         <div className={'grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-12.5'}>
            {products.map(product => (
               <ProductCard product={product} key={product.id} />
            ))}
         </div>
      </section>
   )
}
