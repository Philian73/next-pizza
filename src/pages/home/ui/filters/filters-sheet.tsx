import { FilterIcon } from 'lucide-react'

import { Button } from '@/shared/ui/shadcn/button'
import { ScrollArea, ScrollBar } from '@/shared/ui/shadcn/scroll-area'
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/shared/ui/shadcn/sheet'

import { Filters } from './filters'

export const FiltersSheet = () => {
   return (
      <Sheet>
         <SheetTrigger asChild>
            <Button
               className={`
                  self-end text-base font-bold
                  lg:hidden
               `}
               variant={'ghost'}
            >
               Фильтры
               <FilterIcon />
            </Button>
         </SheetTrigger>

         <SheetContent>
            <SheetHeader className={'border-b shadow-lg shadow-black/5'}>
               <SheetTitle>Фильтрация</SheetTitle>
               <SheetDescription className={'hidden'} />
            </SheetHeader>

            <div className={'grid flex-1 auto-rows-min gap-6 px-4'}>
               <ScrollArea type={'auto'} className={'-mx-3 max-h-[calc(100svh-5rem)]'}>
                  <Filters className={'w-full pr-6 pl-3'} />

                  <ScrollBar orientation={'vertical'} />
               </ScrollArea>
            </div>
         </SheetContent>
      </Sheet>
   )
}
