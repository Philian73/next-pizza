import type { ComponentProps } from 'react'

import { Typography } from '@/shared/ui/typography'

import { Filters } from './filters'

type FiltersPanelProps = Omit<ComponentProps<'aside'>, 'children'>

export const FiltersPanel = (props: FiltersPanelProps) => {
   return (
      <aside {...props}>
         <Typography className={'mb-4'} variant={'h4'}>
            Фильтрация
         </Typography>

         <Filters />
      </aside>
   )
}
