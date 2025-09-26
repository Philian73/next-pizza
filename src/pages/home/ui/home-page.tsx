import type { SearchParams } from 'nuqs/server'

import { headers } from 'next/headers'

import { Container } from '@/shared/ui/container'
import { TopBar } from '@/widgets/top-bar'

import { Products } from './products'

export const HomePage = async ({ searchParams }: { searchParams: Promise<SearchParams> }) => {
   const headersList = await headers()

   const pathname = headersList.get('x-pathname') ?? '/'

   console.log(pathname, await searchParams)

   return (
      <div className={``}>
         <TopBar />

         <Container className={'pt-4'}>
            <Products />
         </Container>
      </div>
   )
}
