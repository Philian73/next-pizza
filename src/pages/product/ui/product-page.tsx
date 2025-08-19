export const ProductPage = async ({ params: { slug } }: { params: { slug: string } }) => {
   return <div>ProductPage {`"${slug}"`}</div>
}
