'use client'

import type { LucideProps } from 'lucide-react'
import type * as React from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import { useId } from 'react'

import { cn } from '@/shared/lib/utils'

type CheckboxProps = {
   label: string
   iconPosition?: 'left' | 'right'
   icon?: React.ExoticComponent<LucideProps>
} & React.ComponentProps<typeof CheckboxPrimitive.Root>

function Checkbox({
   className,
   label,
   disabled,
   icon: Icon,
   iconPosition = 'right',
   id,
   ...props
}: CheckboxProps) {
   const generatedId = useId()
   const checkboxId = id ?? generatedId

   return (
      <div aria-disabled={disabled} className={`inline-flex items-center gap-2`}>
         <CheckboxPrimitive.Root
            data-slot={'checkbox'}
            className={cn(
               `
                  peer size-6 shrink-0 rounded-[8px] border border-gray-100 bg-gray-100 shadow-xs
                  transition-shadow outline-none
                  focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50
                  disabled:cursor-not-allowed disabled:opacity-50
                  aria-invalid:border-destructive aria-invalid:ring-destructive/20
                  data-[state=checked]:border-primary data-[state=checked]:bg-primary
                  data-[state=checked]:text-primary-foreground
                  dark:border-input dark:bg-input/30 dark:aria-invalid:ring-destructive/40
                  dark:data-[state=checked]:bg-primary
               `,
               className
            )}
            disabled={disabled}
            {...props}
            id={checkboxId}
         >
            <CheckboxPrimitive.Indicator
               data-slot={'checkbox-indicator'}
               className={'flex items-center justify-center text-current transition-none'}
            >
               <CheckIcon className={'size-5.5'} />
            </CheckboxPrimitive.Indicator>
         </CheckboxPrimitive.Root>

         {!!label && (
            <label
               htmlFor={checkboxId}
               aria-disabled={disabled}
               className={`
                  flex flex-1 cursor-pointer items-center gap-1.5 leading-none
                  aria-disabled:pointer-events-none aria-disabled:opacity-50
                  [&_svg]:pointer-events-none [&_svg]:shrink-0
                  [&_svg:not([class*='size-'])]:size-4.5
               `}
            >
               <span className={cn(iconPosition === 'left' && 'order-1')}>{label}</span>

               {!!Icon && (
                  <span className={cn(iconPosition === 'left' && 'order-0')}>
                     <Icon />
                  </span>
               )}
            </label>
         )}
      </div>
   )
}

export type { CheckboxProps }
export { Checkbox }
