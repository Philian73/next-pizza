import type { ComponentProps } from 'react'

import type { CheckboxGroupItem } from '@/shared/ui/checkbox-group'

import { cn } from '@/shared/lib/utils'
import { CheckboxGroup } from '@/shared/ui/checkbox-group'
import { Input } from '@/shared/ui/input'
import { Separator } from '@/shared/ui/shadcn/separator'
import { Slider } from '@/shared/ui/shadcn/slider'
import { Typography } from '@/shared/ui/typography'

type HomeFiltersProps = Omit<ComponentProps<'div'>, 'children'>

const INGREDIENTS = [
   {
      label: 'Pizza',
      value: '1',
      defaultChecked: true,
   },
   {
      label: 'Sandwich',
      value: '2',
      defaultChecked: true,
   },
   {
      value: '3',
      label: 'Beer',
   },
   {
      value: '4',
      label: 'Ice Cream',
   },
] as CheckboxGroupItem[]

export const Filters = ({ className, ...rest }: HomeFiltersProps) => {
   return (
      <div className={cn('flex flex-col gap-5', className)} {...rest}>
         <CheckboxGroup options={[{ label: 'Можно собирать' }, { label: 'Новинки' }]} />

         <Separator />

         <div className={'flex flex-col gap-3'}>
            <Typography as={'span'} className={'font-bold'}>
               Цена от и до:
            </Typography>

            <div className={'flex gap-3'}>
               <Input
                  type={'number'}
                  classNames={{ input: 'h-10' }}
                  placeholder={'0'}
                  min={0}
                  max={1000}
                  defaultValue={0}
               />
               <Input
                  classNames={{ input: 'h-10' }}
                  type={'number'}
                  placeholder={'1000'}
                  min={100}
                  max={1000}
               />
            </div>

            <Slider defaultValue={[0]} />
         </div>

         <Separator />

         <CheckboxGroup title={'Ингредиенты'} options={INGREDIENTS} />
      </div>
   )
}
