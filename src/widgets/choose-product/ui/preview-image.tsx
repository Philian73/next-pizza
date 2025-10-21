import type { ComponentProps } from 'react'

import Image from 'next/image'

import { cn } from '@/shared/lib/utils'

import emptyProductIcon from '~/public/images/empty-product.svg'

type PreviewImageProps = {
   productName: string
   imageUrl?: string | null
   sizeValue?: string
} & Omit<ComponentProps<'div'>, 'children'>

export const PreviewImage = ({
   productName,
   imageUrl,
   sizeValue,
   className,
   ...rest
}: PreviewImageProps) => {
   return (
      <div
         className={cn(
            'relative flex items-center justify-center px-22.5 py-32',
            {
               'px-3.5 py-12.5': sizeValue === '35',
               'px-13 py-23': sizeValue === '30',
               'px-32 py-41.5': sizeValue === '20',
            },
            className
         )}
         {...rest}
      >
         {(sizeValue === '20' || sizeValue === '25') && (
            <div className={'absolute size-95.5 -translate-1 rounded-full border border-dashed'} />
         )}
         {sizeValue === '20' && (
            <div className={'absolute size-79.25 -translate-1 rounded-full border border-dashed'} />
         )}

         <div className={'relative aspect-[4/3] w-full scale-125'}>
            <Image
               alt={productName}
               src={imageUrl ?? emptyProductIcon}
               placeholder={'blur'}
               blurDataURL={emptyProductIcon.src}
               fill
               className={'object-contain'}
               sizes={'(max-width: 768px) 100vw, 530px'}
            />
         </div>
      </div>
   )
}
