'use client'

import type { ComponentProps } from 'react'

import type { CheckboxProps } from '@/shared/ui/shadcn/checkbox'

import { useMemo, useState } from 'react'

import { cn } from '@/shared/lib/utils'
import { InputSearch } from '@/shared/ui/input'
import { Button } from '@/shared/ui/shadcn/button'
import { Checkbox } from '@/shared/ui/shadcn/checkbox'
import { ScrollArea } from '@/shared/ui/shadcn/scroll-area'
import { Typography } from '@/shared/ui/typography'

export type CheckboxGroupItem = CheckboxProps

type CheckboxGroupProps = {
   options: CheckboxGroupItem[]
   limit?: number
   searchPlaceholder?: string
   title?: string
} & Omit<ComponentProps<'div'>, 'children'>

export const CheckboxGroup = ({
   options,
   searchPlaceholder = 'Поиск...',
   limit = 5,
   title,
   className,
   ...rest
}: CheckboxGroupProps) => {
   const [showAll, setShowAll] = useState(false)
   const [searchValue, setSearchValue] = useState('')

   const visibleItems = useMemo(() => {
      const filtered = searchValue
         ? options.filter(item => item.label.toLowerCase().includes(searchValue.toLowerCase()))
         : options

      return showAll ? filtered : filtered.slice(0, limit)
   }, [options, searchValue, showAll, limit])

   const shouldShowToggle = options.length > limit

   const handleToggle = () => {
      setSearchValue('')
      setShowAll(prev => !prev)
   }

   return (
      <div className={cn('flex flex-col items-start gap-4', className)} {...rest}>
         {!!title && (
            <Typography as={'span'} className={'font-bold'}>
               {title}
            </Typography>
         )}

         {showAll && (
            <InputSearch
               classNames={{ input: 'h-10' }}
               value={searchValue}
               onEndIconClick={() => setSearchValue('')}
               onChange={e => setSearchValue(e.target.value)}
               placeholder={searchPlaceholder}
            />
         )}

         <ScrollArea className={'w-full'}>
            <ul className={'flex max-h-96 flex-col gap-4 pr-2'}>
               {visibleItems.map((item, index) => (
                  <li className={'inline-flex'} key={index}>
                     <Checkbox {...item} />
                  </li>
               ))}
            </ul>
         </ScrollArea>

         {shouldShowToggle && (
            <Button onClick={handleToggle} variant={'link'} className={'px-0 text-base'}>
               {showAll ? 'Скрыть' : '+ Показать все'}
            </Button>
         )}
      </div>
   )
}
