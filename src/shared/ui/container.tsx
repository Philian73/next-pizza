import type { ComponentProps } from 'react'

import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/shared/lib/utils'

type ContainerProps = ComponentProps<'div'> & {
   asChild?: boolean
}

export const Container = ({ asChild, className, ...rest }: ContainerProps) => {
   const Component = asChild ? Slot : 'div'

   return <Component className={cn(`mx-auto box-content max-w-320 px-4`, className)} {...rest} />
}
