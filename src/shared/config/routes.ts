export const PATHS = {
   home: '/',
   products: '/product',
   product: (id: string | number) => `/product/${id}`,
} as const
