import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { ApiSchemas } from '@/shared/api'

import { PlusIcon } from 'lucide-react'

import { cva } from 'class-variance-authority'
import Image from 'next/image'
import Link from 'next/link'

import { PATHS } from '@/shared/config/routes'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/shadcn/button'
import { Typography } from '@/shared/ui/typography'

type ProductStatus = ApiSchemas['Product']['status']

type ProductCardProps = {
   product: ApiSchemas['Product']
} & Omit<ComponentProps<'article'>, 'children'>

export const ProductCard = ({ className, product, ...rest }: ProductCardProps) => {
   const link = PATHS.product(product.slug)

   const price = product.price ?? product.variations?.[0]?.price

   return (
      <article className={cn('flex flex-col gap-3', className)} {...rest}>
         <Link className={'flex-1'} href={link}>
            <div className={'relative flex h-65 justify-center rounded-lg bg-secondary/50 p-6'}>
               <div className={'relative size-53.75'}>
                  <Image
                     sizes={'(max-width: 768px) 100vw, 33vw'}
                     className={'object-contain'}
                     fill
                     loading={'lazy'}
                     src={product?.imageUrl ?? ''}
                     alt={product.name}
                  />
               </div>

               <ProductStatus className={'absolute bottom-2.5 left-2.5'} status={product.status} />
            </div>

            <Typography className={'py-2'} variant={'h4'}>
               {product.name}
            </Typography>

            <Typography variant={'lead'}>{product.description}</Typography>
         </Link>

         <footer className={'flex items-center justify-between'}>
            <Typography as={'span'} className={'text-[20px] font-bold'}>
               {product.variations.length > 1 && 'от '}
               {price} ₽
            </Typography>

            <Button asChild variant={'secondary'}>
               <Link href={link}>
                  <PlusIcon size={20} />
                  Добавить
               </Link>
            </Button>
         </footer>
      </article>
   )
}

const productStatusVariants = cva(
   `inline-flex -rotate-6 rounded-lg px-3 py-1.5 text-xs font-bold text-background uppercase`,
   {
      variants: {
         status: {
            DEFAULT: `bg-background text-foreground`,
            ARCHIVED: `bg-pink-400 text-background`,
            HIT: `bg-pink-400 text-background`,
            NEW: `bg-indigo-500 text-background`,
         } satisfies Record<ProductStatus, string>,
      },
   }
)

type ProductStatusProps = Omit<ComponentProps<'span'>, 'children'> &
   VariantProps<typeof productStatusVariants>

const ProductStatus = ({ status, className, ...rest }: ProductStatusProps) => {
   if (status === 'DEFAULT') {
      return null
   }

   return (
      <span className={cn(productStatusVariants({ status, className }))} {...rest}>
         {status === 'HIT' && 'хит'}
         {status === 'NEW' && 'новинка'}
      </span>
   )
}
