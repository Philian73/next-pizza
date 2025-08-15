'use client'

import { ArrowDownIcon, ArrowUpIcon, SearchIcon } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { cn } from '@/shared/lib/utils'
import {
   CommandDialog,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
   CommandSeparator,
   CommandShortcut,
} from '@/shared/ui/shadcn/command'

type CommandSearchItem = {
   label: string
   href: string
   groupBy?: string | null
   imageUrl?: string | null
}

type CommandSearchProps = {
   shortcutKey?: 'k' | 'j' | 'l'
   items: CommandSearchItem[]
   defaultOpen?: boolean
   defaultSearch?: string
   open?: boolean
   search?: string
   onOpenChange?: (value: boolean) => void
   onSearchChange?: (value: string) => void
   manualSearch?: boolean
   classNames?: Record<string, string>
}

const CommandSearch = ({
   items,
   classNames,
   open: controlledOpen,
   onOpenChange,
   search: controlledSearch,
   onSearchChange,
   defaultSearch,
   shortcutKey = 'k',
   defaultOpen = false,
   manualSearch = false,
}: CommandSearchProps) => {
   const router = useRouter()

   const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen ?? false)
   const [uncontrolledSearch, setUncontrolledSearch] = useState(defaultSearch ?? '')

   const open = controlledOpen ?? uncontrolledOpen
   const search = controlledSearch ?? uncontrolledSearch
   const setSearch = onSearchChange ?? setUncontrolledSearch
   const setOpen = onOpenChange ?? setUncontrolledOpen

   useEffect(() => {
      const down = (e: KeyboardEvent) => {
         if (e.key === shortcutKey && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            setOpen(!open)
         }
      }

      document.addEventListener('keydown', down)

      return () => document.removeEventListener('keydown', down)
   }, [shortcutKey, open, setOpen])

   const groupedItems = useMemo(() => {
      return items.reduce(
         (acc, item) => {
            const group = item?.groupBy ?? 'default'

            if (!acc[group]) {
               acc[group] = []
            }

            acc[group].push(item)

            return acc
         },
         {} as Record<string, CommandSearchItem[]>
      )
   }, [items])

   return (
      <div className={cn('flex-1', classNames?.root)}>
         <button
            onClick={() => setOpen(!open)}
            type={'button'}
            className={`
               flex h-10 w-full min-w-0 flex-1 items-center gap-3 rounded-md border border-input
               bg-transparent px-3 py-1 text-muted-foreground transition-colors outline-none
               focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50
               active:border-primary
               [&_svg]:pointer-events-none [&_svg]:shrink-0
               [&_svg:not([class*='size-'])]:size-5
            `}
         >
            <SearchIcon />

            <span>Поиск...</span>

            <span
               className={`
                  ml-auto inline-flex gap-2
                  max-lg:hidden
               `}
            >
               <CommandShortcut>Ctrl</CommandShortcut>
               <CommandShortcut>{shortcutKey?.toUpperCase()}</CommandShortcut>
            </span>
         </button>

         <CommandDialog
            className={'h-[calc(100vh-2rem)]'}
            showCloseButton={false}
            commandProps={{ shouldFilter: !manualSearch }}
            open={open}
            onOpenChange={open => {
               if (!open) {
                  setOpen(false)
               }
               setSearch('')
            }}
         >
            <CommandInput value={search} onValueChange={setSearch} placeholder={'Поиск...'} />

            <CommandList className={`max-h-full`}>
               <CommandEmpty>Ничего не найдено</CommandEmpty>

               {Object.keys(groupedItems).map(group => (
                  <CommandGroup key={group} {...(group !== 'default' && { heading: group })}>
                     {groupedItems[group].map((item, index) => (
                        <CommandItem
                           asChild
                           className={'cursor-pointer'}
                           onSelect={() => {
                              router.push(item.href)
                              setOpen(false)
                           }}
                           key={index}
                        >
                           <Link href={item.href}>
                              {!!item?.imageUrl && (
                                 <Image
                                    className={'rounded-full object-cover'}
                                    src={item.imageUrl}
                                    alt={`${item.label} картинка`}
                                    width={35}
                                    height={35}
                                 />
                              )}
                              <span>{highlightMatch(item.label, search)}</span>
                           </Link>
                        </CommandItem>
                     ))}
                  </CommandGroup>
               ))}
            </CommandList>

            <div
               className={`
                  mt-auto px-2 pb-5
                  max-lg:hidden
               `}
            >
               <CommandSeparator className={'mb-5'} />

               <div
                  className={`
                     flex justify-between gap-3
                     [&>span]:[&>kbd]:mr-1.5
                  `}
               >
                  <span>
                     <CommandShortcut>Enter</CommandShortcut>
                     для выбора
                  </span>

                  <span>
                     <CommandShortcut>
                        <ArrowUpIcon size={14} />
                     </CommandShortcut>
                     <CommandShortcut>
                        <ArrowDownIcon size={14} />
                     </CommandShortcut>
                     для навигации
                  </span>

                  <span>
                     <CommandShortcut>esc</CommandShortcut>
                     для закрытия
                  </span>
               </div>
            </div>
         </CommandDialog>
      </div>
   )
}

function escapeRegex(s: string) {
   return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function highlightMatch(text: string, query: string) {
   if (!query) {
      return [<span key={0}>{text}</span>]
   }

   const regex = new RegExp(`(${escapeRegex(query)})`, 'gi')
   const parts = text.split(regex)

   return parts.map((part, i) =>
      regex.test(part) ? (
         <span key={i} className={'font-extrabold'}>
            {part}
         </span>
      ) : (
         <span key={i}>{part}</span>
      )
   )
}

export type { CommandSearchProps, CommandSearchItem }
export { CommandSearch }
