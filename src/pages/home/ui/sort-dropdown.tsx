import type { ComponentProps } from 'react'

import { ArrowUpDownIcon } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/shared/ui/shadcn/dropdown-menu'

type SortDropdownProps = Omit<ComponentProps<typeof DropdownMenuTrigger>, 'children'>

export const SortDropdown = ({ className, ...rest }: SortDropdownProps) => {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger
            className={cn(
               `
                  inline-flex h-10 w-fit items-center gap-1.5 self-end rounded-lg bg-muted px-3
                  py-0.5 font-bold
               `,
               className
            )}
            {...rest}
         >
            <ArrowUpDownIcon size={16} />

            <span>Сортировка: </span>

            <span className={'text-primary'}>популярное</span>
         </DropdownMenuTrigger>

         <DropdownMenuContent className={'w-[var(--radix-dropdown-menu-trigger-width)]'}>
            <ul>
               <li>
                  <DropdownMenuItem>рейтинг</DropdownMenuItem>
               </li>
            </ul>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
