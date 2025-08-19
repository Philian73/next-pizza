import { Container } from '@/shared/ui/container'
import { TopBar } from '@/widgets/top-bar'

import { FiltersPanel } from './filters/filters-panel'
import { FiltersSheet } from './filters/filters-sheet'
import { Products } from './products'
import { SortDropdown } from './sort-dropdown'

export const HomePage = () => {
   return (
      <div className={``}>
         <TopBar />

         <Container className={'flex gap-20 pt-5 pb-10'}>
            <FiltersPanel className={'max-lg:hidden'} />

            <div className={'flex flex-1 flex-col gap-1.5'}>
               <div
                  className={`
                     flex items-center justify-between gap-1.5
                     max-sm:flex-col
                     lg:self-end
                  `}
               >
                  <SortDropdown />

                  <FiltersSheet />
               </div>

               <Products />
            </div>
         </Container>
      </div>
   )
}
