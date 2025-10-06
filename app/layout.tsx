import type { ReactNode } from 'react'

import { Nunito } from 'next/font/google'

import '@/app/globals.css'
import { Providers } from '@/app/providers'

const nunito = Nunito({
   variable: '--font-nunito',
   subsets: ['cyrillic'],
   weight: ['400', '500', '600', '700', '800', '900'],
})

export default function BaseLayout({
   children,
}: Readonly<{
   children: ReactNode
}>) {
   return (
      <html lang={'ru'} data-scroll-behavior={'smooth'} suppressHydrationWarning>
         <body
            className={`
               ${nunito.variable}
               antialiased
            `}
         >
            <Providers>{children}</Providers>
         </body>
      </html>
   )
}
