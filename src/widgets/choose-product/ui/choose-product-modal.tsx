'use client'

import type { ComponentProps } from 'react'

import { useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { useProductsStore } from '@/entities/product'
import { PATHS } from '@/shared/config/routes'
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
} from '@/shared/ui/shadcn/dialog'

import { useProductStore } from '../model/choice-product-store'
import { ChooseProductForm } from './choose-product-form'

type ChooseProductModalProps = {
   slug: string
} & Omit<ComponentProps<typeof Dialog>, 'children' | 'open' | 'onOpenChange'>

export const ChooseProductModal = ({ slug }: ChooseProductModalProps) => {
   const router = useRouter()

   const product = useProductsStore(state => state.getProductBySlug(slug))

   const setupProduct = useProductStore(state => state.setupProduct)

   useEffect(() => {
      if (!product) {
         return
      }

      setupProduct(product)
   }, [product, setupProduct])

   if (!product) {
      return null
   }

   return (
      <Dialog
         open
         onOpenChange={() => {
            if (typeof window !== 'undefined' && window.history.length > 2) {
               router.back()
            } else {
               router.replace(PATHS.home, { scroll: false })
            }
         }}
      >
         <DialogContent className={'h-152.5 min-w-231'}>
            <DialogHeader className={'sr-only'}>
               <DialogTitle>{product.name}</DialogTitle>
               <DialogDescription>{product.description}</DialogDescription>
            </DialogHeader>

            <ChooseProductForm product={product} />
         </DialogContent>
      </Dialog>
   )
}
