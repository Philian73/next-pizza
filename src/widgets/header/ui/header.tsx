import type { ComponentProps } from 'react'

import { ArrowRightIcon, ShoppingCartIcon, UserIcon } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/shared/lib/utils'
import { Container } from '@/shared/ui/container'
import { Button } from '@/shared/ui/shadcn/button'
import { Separator } from '@/shared/ui/shadcn/separator'
import { Typography } from '@/shared/ui/typography'

import logo from '~/public/logo.png'

type HeaderProps = Omit<ComponentProps<'header'>, 'children'>

export const Header = ({ className, ...rest }: HeaderProps) => {
   return (
      <header className={cn('border-b', className)} {...rest}>
         <Container className={`flex items-center justify-between py-8`}>
            <div className={'group flex items-center gap-3'}>
               <Image src={logo} alt={'Логотип'} width={35} height={35} />

               <Link href={'/'}>
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

            <div
               className={`
                  hidden
                  md:flex md:items-center md:gap-3
               `}
            >
               <Button variant={'outline'}>
                  <UserIcon size={16} />
                  Войти
               </Button>

               <Button className={'group relative gap-4'}>
                  <span className={'font-bold'}>520 ₽</span>

                  <Separator className={'opacity-50'} orientation={'vertical'} />

                  <div
                     className={`
                        flex items-center gap-1 font-bold transition-all duration-300
                        group-hover:opacity-0
                     `}
                  >
                     <ShoppingCartIcon className={'relative'} strokeWidth={2} size={16} />

                     <span className={'font-bold'}>3</span>
                  </div>

                  <ArrowRightIcon
                     size={20}
                     className={`
                        absolute right-5 -translate-x-2 opacity-0 transition duration-300
                        group-hover:translate-x-0 group-hover:opacity-100
                     `}
                  />
               </Button>
            </div>
         </Container>
      </header>
   )
}
