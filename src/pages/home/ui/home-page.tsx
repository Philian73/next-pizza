import { Container } from '@/shared/ui/container'
import { TopBar } from '@/widgets/top-bar'

import { Products } from './products'

export const HomePage = async () => {
   return (
      <div className={``}>
         <TopBar />

         <Container className={'pt-4'}>
            <Products />
         </Container>
      </div>
   )
}
