import { ChooseProductModal } from '@/widgets/choose-product'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params

   return <ChooseProductModal slug={slug} />
}
