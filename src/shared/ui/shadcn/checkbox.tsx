'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import * as React from 'react'
import { useId } from 'react'

import { cn } from '@/shared/lib/utils'

type CheckboxProps = {
   label: string
} & React.ComponentProps<typeof CheckboxPrimitive.Root>

function Checkbox({ className, label, disabled, id, ...props }: CheckboxProps) {
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
                  flex-1 cursor-pointer leading-none
                  aria-disabled:pointer-events-none aria-disabled:opacity-50
               `}
            >
               {label}
            </label>
         )}
      </div>
   )
}

export type { CheckboxProps }
export { Checkbox }
