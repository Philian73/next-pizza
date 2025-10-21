import type { ComponentProps } from 'react'

import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/shadcn/tabs'

import { useProductStore } from '../model/choice-product-store'

type SizeTabsProps = ComponentProps<typeof Tabs>

export const SizeTabs = (props: SizeTabsProps) => {
   const sizes = useProductStore(state => state.sizes)

   if (sizes.length === 0) {
      return null
   }

   return (
      <Tabs {...props}>
         <TabsList className={'w-full'}>
            {sizes.map(size => (
               <TabsTrigger
                  className={'font-bold select-none'}
                  key={size}
                  value={size}
                  disabled={sizes.length === 1}
               >
                  {size}
               </TabsTrigger>
            ))}
         </TabsList>
      </Tabs>
   )
}
