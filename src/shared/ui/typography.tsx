import type { ComponentProps, ElementType } from 'react'

import type { VariantProps } from 'class-variance-authority'

import { InfoIcon, TriangleAlertIcon } from 'lucide-react'

import { cva } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'

const variantMapping = {
   h1: 'h1',
   h2: 'h2',
   h3: 'h3',
   h4: 'h4',
   p: 'p',
   default: 'p',
   blockquote: 'blockquote',
   inlineCode: 'code',
   lead: 'p',
   large: 'div',
   small: 'small',
   xs: 'span',
   error: 'span',
   warning: 'span',
} as const satisfies Record<string, ElementType>

const typographyVariants = cva(null, {
   defaultVariants: {
      variant: 'default',
   },
   variants: {
      variant: {
         h1: 'scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl',
         h2: 'scroll-m-20 text-4xl font-extrabold tracking-tight first:mt-0',
         h3: 'scroll-m-20 text-3xl font-semibold tracking-tight',
         h4: 'scroll-m-20 text-2xl font-bold tracking-tight',
         p: 'leading-7 [&:not(:first-child)]:mt-3',
         default: 'text-base font-normal',
         blockquote: 'mt-6 border-l-2 pl-6 italic',
         inlineCode:
            'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
         lead: 'text-sm text-muted-foreground',
         large: 'text-lg font-semibold',
         small: 'text-sm font-medium leading-none',
         xs: 'text-xs leading-none',
         error: 'text-xs text-destructive flex items-start gap-1.5',
         warning: 'text-xs text-amber-500 flex items-start gap-1.5',
      } satisfies Record<keyof typeof variantMapping, string>,
   },
})

type TypographyProps<T extends ElementType> = VariantProps<typeof typographyVariants> & {
   as?: T
}

export const Typography = <T extends ElementType = 'p'>({
   as,
   children,
   className,
   variant,
   ...rest
}: Omit<ComponentProps<T>, keyof TypographyProps<T>> & TypographyProps<T>) => {
   const mappingTag = variant ? variantMapping[variant] : 'p'

   const Component = as ?? mappingTag

   return (
      <Component className={cn(typographyVariants({ className, variant }))} {...rest}>
         {variant === 'error' && (
            <span>
               <InfoIcon size={16} />
            </span>
         )}
         {variant === 'warning' && (
            <span>
               <TriangleAlertIcon size={16} />
            </span>
         )}

         {children}
      </Component>
   )
}
