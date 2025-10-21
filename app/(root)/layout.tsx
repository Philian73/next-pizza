import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import { productApi, ProductsStoreProvider } from '@/entities/product'
import { Header } from '@/widgets/header'

export const metadata: Metadata = {
   title: {
      default: `${process.env.APP_NAME}`,
      template: `%s | ${process.env.APP_NAME}`,
   },
   description:
      'Этот проект был разработан для поддержки знаний. Вся продукция - фейк, переходите и заказывайте на dodopizza.ru ^_^',
}

export default async function RootLayout({
   children,
   modal,
}: Readonly<{
   children: ReactNode
   modal: ReactNode
}>) {
   const { data: products = [] } = await productApi.getProducts()

   const productsSlugMap = Object.fromEntries(products.map(product => [product.slug, product]))

   return (
      <ProductsStoreProvider
         initState={{
            products,
            productsSlugMap,
         }}
      >
         <Header />

         <main>{children}</main>

         {modal}
      </ProductsStoreProvider>
   )
}
