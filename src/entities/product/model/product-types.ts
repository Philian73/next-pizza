export const ProductStatuses = {
   NEW: 'NEW',
   HIT: 'HIT',
   REGULAR: 'REGULAR',
} as const

export type ProductStatus = (typeof ProductStatuses)[keyof typeof ProductStatuses]

type ProductItem = {
   id: number
   price: number
   imageUrl: string | null
   size: number | null
   type: number | null
}

export type Product = {
   id: number
   name: string
   description: string | null
   imageUrl: string | null
   status: ProductStatus
   createdAt: string
   category: {
      id: number
      name: string
   }
   updatedAt: string
   items: ProductItem[]
}
