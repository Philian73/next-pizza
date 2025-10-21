import type { ComponentProps } from 'react'

import { cn } from '@/shared/lib/utils'
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/shadcn/tabs'

import { useProductStore } from '../model/choice-product-store'

type BasesTabsProps = {
   triggerProps?: Omit<ComponentProps<typeof TabsTrigger>, 'value'>
   currentSize: string
} & ComponentProps<typeof Tabs>

export const BasesTabs = ({ triggerProps, currentSize, ...rest }: BasesTabsProps) => {
   const bases = useProductStore(state => state.bases)
   const getVariationBySizeAndBase = useProductStore(state => state.getVariationBySizeAndBase)

   if (bases.length === 0) {
      return null
   }

   return (
      <Tabs {...rest}>
         <TabsList className={'w-full'}>
            {bases.map(base => (
               <TabsTrigger
                  key={base}
                  {...triggerProps}
                  className={cn('font-bold select-none', triggerProps?.className)}
                  disabled={
                     getVariationBySizeAndBase(currentSize, base)?.base !== base ||
                     bases.length === 1 ||
                     triggerProps?.disabled
                  }
                  value={base}
               >
                  {base}
               </TabsTrigger>
            ))}
         </TabsList>
      </Tabs>
   )
}
