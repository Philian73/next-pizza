import type { ReactNode } from 'react'

import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { ThemeProvider } from './theme-provider'

export const Providers = ({ children }: { children: ReactNode }) => {
   return (
      <NuqsAdapter>
         <ThemeProvider
            attribute={'class'}
            defaultTheme={'system'}
            enableSystem
            disableTransitionOnChange
         >
            {children}
         </ThemeProvider>
      </NuqsAdapter>
   )
}
