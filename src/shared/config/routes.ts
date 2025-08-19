export const PATHS = {
   home: '/',
   products: '/product',
   product: (slug: string) => `/product/${slug}`,
} as const
