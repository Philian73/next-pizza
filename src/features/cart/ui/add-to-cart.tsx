import type { ComponentProps } from 'react'

import { Button } from '@/shared/ui/shadcn/button'

type AddToCartProps = {} & ComponentProps<typeof Button>

export const AddToCart = ({ children, ...rest }: AddToCartProps) => {
   return <Button {...rest}>{children ?? 'Добавить в корзину'}</Button>
}
