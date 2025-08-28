'use client'

import type { ComponentProps } from 'react'

import type { CheckboxProps } from '@/shared/ui/shadcn/checkbox'

import { useCallback, useMemo, useState } from 'react'

import { cn } from '@/shared/lib/utils'
import { InputSearch } from '@/shared/ui/input'
import { Button } from '@/shared/ui/shadcn/button'
import { Checkbox } from '@/shared/ui/shadcn/checkbox'
import { ScrollArea } from '@/shared/ui/shadcn/scroll-area'
import { Typography } from '@/shared/ui/typography'

export type CheckboxGroupItem = {
   value: string
} & Omit<CheckboxProps, 'value' | 'onCheckedChange' | 'checked'>

type Mode = 'single' | 'multiple'

type CheckboxGroupProps<T = string> = {
   options: CheckboxGroupItem[]
   selected: T | T[]
   onChange: (value: T | T[] | null) => void
   limit?: number
   searchPlaceholder?: string
   heading?: string
   mode?: Mode
} & Omit<ComponentProps<'div'>, 'children'>

export const CheckboxGroup = <T extends string | number>({
   options,
   selected,
   onChange,
   searchPlaceholder = 'Поиск...',
   limit = 5,
   heading,
   className,
   mode = 'multiple',
   ...rest
}: CheckboxGroupProps<T>) => {
   const [showAll, setShowAll] = useState(false)
   const [searchValue, setSearchValue] = useState('')

   const visibleItems = useMemo(() => {
      const filtered = searchValue
         ? options.filter(item => item.label.toLowerCase().includes(searchValue.toLowerCase()))
         : options

      return showAll ? filtered : filtered.slice(0, limit)
   }, [options, searchValue, showAll, limit])

   const shouldShowToggle = options.length > limit && visibleItems.length > 0

   const handleCheckedChange = useCallback(
      (value: T) => {
         if (mode === 'multiple') {
            const selectedArray = Array.isArray(selected) ? selected : []

            if (selectedArray.includes(value)) {
               return onChange(selectedArray.filter(v => v !== value))
            }

            return onChange([...selectedArray, value])
         } else {
            return onChange(selected === value ? null : value)
         }
      },
      [onChange, selected, mode]
   )

   const handleToggle = useCallback(() => {
      setSearchValue('')
      setShowAll(prev => !prev)
   }, [])

   return (
      <div className={cn('flex flex-col items-start gap-4', className)} {...rest}>
         {!!heading && (
            <Typography as={'span'} className={'font-bold'}>
               {heading}
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

         <ScrollArea type={'auto'} className={'w-full'}>
            <ul className={'flex max-h-96 flex-col gap-4 pr-2'}>
               {visibleItems.map(item => {
                  const isChecked = Array.isArray(selected)
                     ? selected.includes(item.value as T)
                     : selected === item.value

                  return (
                     <li className={'inline-flex'} key={item.label + item.value}>
                        <Checkbox
                           {...item}
                           checked={isChecked}
                           onCheckedChange={() => handleCheckedChange(item.value as T)}
                        />
                     </li>
                  )
               })}
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
