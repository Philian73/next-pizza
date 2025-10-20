import type * as React from 'react'

import type { VariantProps } from 'class-variance-authority'

import { Slot } from '@radix-ui/react-slot'

import { cva } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'

const buttonVariants = cva(
   `
      inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-base font-medium
      whitespace-nowrap transition-all outline-none
      focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50
      disabled:pointer-events-none disabled:opacity-50
      aria-invalid:border-destructive aria-invalid:ring-destructive/20
      dark:aria-invalid:ring-destructive/40
      [&_svg]:pointer-events-none [&_svg]:shrink-0
      [&_svg:not([class*='size-'])]:size-4
   `,
   {
      variants: {
         variant: {
            default: `
               bg-primary text-primary-foreground shadow-xs
               hover:bg-primary/90
            `,
            destructive: `
               bg-destructive text-white shadow-xs
               hover:bg-destructive/90
               focus-visible:ring-destructive/20
               dark:bg-destructive/60 dark:focus-visible:ring-destructive/40
            `,
            outline: `
               border border-primary bg-background text-primary shadow-xs
               hover:bg-accent
               dark:bg-input/30 dark:hover:bg-input/50
            `,
            secondary: `
               bg-secondary text-secondary-foreground shadow-xs
               hover:bg-primary/20
               dark:hover:bg-secondary/80
            `,
            ghost: `
               hover:bg-accent hover:text-accent-foreground
               dark:hover:bg-accent/50
            `,
            link: `
               text-primary underline-offset-4
               hover:text-secondary-foreground
               dark:text-green-600 dark:hover:text-green-700
            `,
         },
         size: {
            default: `
               h-10 px-4 py-2
               has-[>svg]:px-3
            `,
            sm: `
               h-9 gap-1.5 rounded-md px-3
               has-[>svg]:px-2.5
            `,
            lg: `
               h-12 rounded-md px-6
               has-[>svg]:px-4
            `,
            icon: 'size-10',
         },
      },
      defaultVariants: {
         variant: 'default',
         size: 'default',
      },
   }
)

function Button({
   className,
   variant,
   size,
   asChild = false,
   ...props
}: React.ComponentProps<'button'> &
   VariantProps<typeof buttonVariants> & {
      asChild?: boolean
   }) {
   const Comp = asChild ? Slot : 'button'

   return (
      <Comp
         data-slot={'button'}
         className={cn(buttonVariants({ variant, size, className }))}
         {...props}
      />
   )
}

export { Button }
