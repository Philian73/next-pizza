import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import { Nunito } from 'next/font/google'

import '@/app/globals.css'
import { Providers } from '@/app/providers'
import { Header } from '@/widgets/header'

const nunito = Nunito({
   variable: '--font-nunito',
   subsets: ['cyrillic'],
   weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
   title: {
      default: `${process.env.APP_NAME}`,
      template: `%s | ${process.env.APP_NAME}`,
   },
   description:
      'Этот проект был разработан для поддержки знаний. Вся продукция - фейк, переходите и заказывайте на dodopizza.ru ^_^',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: ReactNode
}>) {
   return (
      <html lang={'ru'} suppressHydrationWarning>
         <body
            className={`
               ${nunito.variable}
               antialiased
            `}
         >
            <Providers>
               <Header />

               <main>{children}</main>
            </Providers>
         </body>
      </html>
   )
}
