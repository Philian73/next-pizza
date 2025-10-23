import type { ComponentProps } from 'react'

import type { ApiSchemas } from '@/shared/api'

import { InfoIcon } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/shadcn/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/shadcn/tooltip'
import { Typography } from '@/shared/ui/typography'

import { getFoodValueMeta } from '../model/get-food-value-meta'

type FoodValuesTooltipProps = {
   foodValues?: ApiSchemas['ProductVariationFoodValue']
   triggerProps?: Omit<ComponentProps<typeof Button>, 'children'>
} & Omit<ComponentProps<typeof Tooltip>, 'children'>

export const FoodValuesTooltip = ({
   foodValues,
   triggerProps,
   ...rest
}: FoodValuesTooltipProps) => {
   if (!foodValues) {
      return null
   }

   return (
      <Tooltip {...rest}>
         <TooltipTrigger asChild>
            <Button
               type={'button'}
               size={'sm'}
               variant={'ghost'}
               {...triggerProps}
               className={cn('-mt-0.5', triggerProps?.className)}
            >
               <InfoIcon />
            </Button>
         </TooltipTrigger>

         <TooltipContent className={'min-h-11.25 w-62.5 p-3.5'}>
            <Typography variant={'lead'}>Пищевая ценность на 100 г</Typography>

            <div className={'space-y-2 pt-2'}>
               {Object.entries(foodValues).map(([key, value]) => {
                  if (value <= 0) {
                     return null
                  }

                  const foodValueMeta = getFoodValueMeta(key)

                  return foodValueMeta ? (
                     <section key={key} className={'flex justify-between'}>
                        <Typography className={'font-medium'} variant={'xs'}>
                           {foodValueMeta.label}
                        </Typography>
                        <Typography className={'font-medium'} variant={'xs'}>
                           {value} {foodValueMeta.unit}
                        </Typography>
                     </section>
                  ) : null
               })}
            </div>
         </TooltipContent>
      </Tooltip>
   )
}
