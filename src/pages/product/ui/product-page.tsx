export const ProductPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
   const { slug } = await params

   return <div>ProductPage {`"${slug}"`}</div>
}
