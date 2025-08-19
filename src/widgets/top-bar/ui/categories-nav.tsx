'use client'

import type { ComponentProps } from 'react'

import type { CategoryItem } from '../model/tob-bar-types'

import { ChevronDownIcon } from 'lucide-react'

import Link from 'next/link'

import { cn } from '@/shared/lib/utils'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/shared/ui/shadcn/dropdown-menu'

import { useCategoryNavStore } from '../model/category-nav-store'

// =======================================================================================
type CategoryNavLinkProps = {
   isActive?: boolean
} & ComponentProps<typeof Link>

const CategoryNavLink = ({ isActive, className, ...rest }: CategoryNavLinkProps) => {
   return (
      <Link
         data-slot={'category-nav-menu-link'}
         data-active={isActive}
         className={cn(
            isActive &&
               `
                  text-primary
                  hover:cursor-pointer
               `,
            className
         )}
         {...rest}
      />
   )
}
// =======================================================================================

// =======================================================================================
type CategoryNavItemProps = {
   item: CategoryItem
   isActive?: boolean
}

const CategoryNavItem = ({ item, isActive }: CategoryNavItemProps) => {
   if (item?.children && item.children.length > 0) {
      return (
         <DropdownMenu>
            <DropdownMenuTrigger
               className={`
                  inline-flex items-center gap-1
                  data-[state=open]:[&_svg]:-rotate-180
               `}
            >
               {item.label}

               <ChevronDownIcon className={'size-3 transition-transform duration-300'} />
            </DropdownMenuTrigger>

            <DropdownMenuContent asChild>
               <ul>
                  {item.children.map(child => (
                     <li key={child.label + child.href}>
                        <DropdownMenuItem asChild className={'hover:cursor-pointer'}>
                           <CategoryNavLink href={child.href}>{child.label}</CategoryNavLink>
                        </DropdownMenuItem>
                     </li>
                  ))}
               </ul>
            </DropdownMenuContent>
         </DropdownMenu>
      )
   }

   return (
      <CategoryNavLink isActive={isActive} href={item?.href ?? '/'}>
         {item.label}
      </CategoryNavLink>
   )
}
// =======================================================================================

// =======================================================================================
type CategoriesNavProps = {
   items: CategoryItem[]
   classNames?: {
      root?: string
      list?: string
      listItem?: string
   }
} & Omit<ComponentProps<'nav'>, 'className' | 'children'>

export const CategoriesNav = ({ classNames, items, ...rest }: CategoriesNavProps) => {
   const activeCategory = useCategoryNavStore(state => state.activeCategory)

   return (
      <nav className={classNames?.root} {...rest}>
         <ul
            data-slot={'category-nav-menu-list'}
            className={cn(
               `
                  inline-flex h-10 w-fit items-center justify-center gap-1.5 rounded-lg bg-muted
                  p-[3px] text-muted-foreground
               `,
               classNames?.list
            )}
         >
            {items.map((item, index) => (
               <li
                  data-slot={'category-nav-menu-item'}
                  key={item.label}
                  className={cn(
                     `
                        group inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center
                        gap-1.5 rounded-md border border-transparent px-5 py-1 font-medium
                        whitespace-nowrap text-foreground
                        transition-[color,box-shadow,background-color] select-none
                        hover:cursor-pointer hover:bg-background hover:shadow-sm
                        focus-visible:border-ring focus-visible:ring-[3px]
                        focus-visible:ring-ring/50 focus-visible:outline-1
                        focus-visible:outline-ring
                        disabled:pointer-events-none disabled:opacity-50
                        has-[&[data-active=true]]:bg-background has-[&[data-active=true]]:font-bold
                        has-[&[data-active=true]]:text-primary has-[&[data-active=true]]:shadow-sm
                        has-[&[data-state=open]]:bg-background
                        dark:text-muted-foreground dark:hover:border-input dark:hover:bg-input/30
                        dark:hover:text-foreground
                        [&_svg]:pointer-events-none [&_svg]:shrink-0
                        [&_svg:not([class*='size-'])]:size-4
                     `,
                     classNames?.listItem
                  )}
               >
                  <CategoryNavItem
                     isActive={item.slug === activeCategory || (index === 0 && !activeCategory)}
                     item={item}
                  />
               </li>
            ))}
         </ul>
      </nav>
   )
}
// =======================================================================================
