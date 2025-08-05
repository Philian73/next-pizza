import type { ComponentProps } from 'react'

import { UserIcon } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import { PATHS } from '@/shared/config/routes'
import { cn } from '@/shared/lib/utils'
import { Container } from '@/shared/ui/container'
import { Button } from '@/shared/ui/shadcn/button'
import { Typography } from '@/shared/ui/typography'

import logo from '~/public/logo.png'

type HeaderProps = Omit<ComponentProps<'header'>, 'children'>

export const Header = ({ className, ...rest }: HeaderProps) => {
   return (
      <header className={cn('border-b', className)} {...rest}>
         <Container className={`flex items-center justify-between py-8`}>
            <div className={'group flex items-center gap-3'}>
               <Image src={logo} alt={'Логотип'} width={35} height={35} />

               <Link href={PATHS.home}>
                  <h1
                     className={`
                        text-2xl font-black uppercase transition
                        group-hover:drop-shadow-[0px_0px_3px_#d15700]
                     `}
                  >
                     {process.env.APP_NAME}
                  </h1>

                  <Typography variant={'lead'}>&copy;Philian73, идея Archakov</Typography>
               </Link>
            </div>

            <div className={`flex items-center gap-1.5`}>
               <Button variant={'outline'}>
                  <UserIcon size={16} />
                  Войти
               </Button>
            </div>
         </Container>
      </header>
   )
}
