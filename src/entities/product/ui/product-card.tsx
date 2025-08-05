import type { ComponentProps } from 'react'

import { PlusIcon } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import { PATHS } from '@/shared/config/routes'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/shadcn/button'
import { Typography } from '@/shared/ui/typography'

type ProductCardProps = {
   product: {
      name: string
      image: string
      price: number
      id: string
      description: string
   }
} & Omit<ComponentProps<'article'>, 'children'>

export const ProductCard = ({ className, product, ...rest }: ProductCardProps) => {
   const link = PATHS.product(product.id)

   return (
      <article className={cn('flex flex-col gap-3', className)} {...rest}>
         <Link className={'flex-1'} href={link}>
            <div className={'flex h-65 justify-center rounded-lg bg-secondary/50 p-6'}>
               <div className={'relative size-53.75'}>
                  <Image
                     sizes={'(max-width: 768px) 100vw, 33vw'}
                     className={'object-contain'}
                     fill
                     loading={'lazy'}
                     src={product.image}
                     alt={product.name}
                  />
               </div>
            </div>

            <Typography className={'py-2'} variant={'h4'}>
               {product.name}
            </Typography>

            <Typography variant={'lead'}>{product.description}</Typography>
         </Link>

         <footer className={'flex items-center justify-between'}>
            <Typography as={'span'} className={'text-[20px] font-bold'}>
               от {product.price} ₽
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
