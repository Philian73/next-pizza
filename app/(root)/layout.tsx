import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import { Header } from '@/widgets/header'

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
      <>
         <Header />

         <main>{children}</main>
      </>
   )
}
