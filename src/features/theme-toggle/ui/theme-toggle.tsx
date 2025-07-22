'use client'

import type { ComponentProps } from 'react'

import { MoonIcon, SunIcon } from 'lucide-react'

import { useTheme } from 'next-themes'

import { Button } from '@/shared/ui/shadcn/button'
import {
   DropdownMenu,
   DropdownMenuTrigger,
   DropdownMenuContent,
   DropdownMenuItem,
} from '@/shared/ui/shadcn/dropdown-menu'

type ThemeToggleProps = Omit<ComponentProps<typeof Button>, 'children'>

export const ThemeToggle = (props: ThemeToggleProps) => {
   const { setTheme } = useTheme()

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant={'outline'} size={'icon'} {...props}>
               <SunIcon
                  className={`
                     h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all
                     dark:scale-0 dark:-rotate-90
                  `}
               />
               <MoonIcon
                  className={`
                     absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all
                     dark:scale-100 dark:rotate-0
                  `}
               />
               <span className={'sr-only'}>Сменить тему</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align={'end'}>
            <DropdownMenuItem onClick={() => setTheme('light')}>Светлая</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>Тёмная</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>Системная</DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
