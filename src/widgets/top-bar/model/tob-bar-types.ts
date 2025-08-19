export type CategoryItem = {
   label: string
   slug: string
} & (
   | {
        children: (Omit<CategoryItem, 'children'> & { href: string })[]
        href?: never
     }
   | {
        href: string
        children?: never
     }
)
