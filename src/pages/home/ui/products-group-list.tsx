'use client'

import type { ComponentProps } from 'react'

import type { Product } from '@/entities/product'

import { useEffect, useRef } from 'react'

import { ProductCard } from '@/entities/product'
import { useIntersection } from '@/shared/lib/hooks/use-intersection'
import { Typography } from '@/shared/ui/typography'
import { useCategoryNavStore } from '@/widgets/top-bar'

type ProductsGroupListProps = {
   title: string
   products: Product[]
   categoryId: number
} & Omit<ComponentProps<'section'>, 'children' | 'ref'>

export const ProductsGroupList = ({
   title,
   categoryId,
   products,
   ...rest
}: ProductsGroupListProps) => {
   const setActiveId = useCategoryNavStore(state => state.setActiveId)

   const intersectionRef = useRef<HTMLDivElement>(null)
   const intersection = useIntersection(intersectionRef, {
      threshold: 0.4,
   })

   useEffect(() => {
      if (intersection?.isIntersecting) {
         setActiveId(categoryId)
      }
   }, [categoryId, setActiveId, title, intersection?.isIntersecting])

   return (
      <section id={title} {...rest} ref={intersectionRef}>
         <Typography className={'mb-5'} variant={'h2'}>
            {title}
         </Typography>

         <div className={'grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-12.5'}>
            {products.map(product => (
               <ProductCard product={product} key={product.id} />
            ))}
         </div>
      </section>
   )
}
