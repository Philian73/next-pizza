import { HomePage } from '@/pages/home'
import { ChooseProductModal } from '@/widgets/choose-product'

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params

   return (
      <>
         <HomePage />

         <ChooseProductModal slug={slug} />
      </>
   )
}
