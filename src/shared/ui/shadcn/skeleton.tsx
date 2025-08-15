import { cn } from '@/shared/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         data-slot={'skeleton'}
         className={cn(
            `
               animate-pulse rounded-md bg-[oklch(0.967_0.001_286.375)]
               dark:bg-[oklch(0.274_0.006_286.033)]
            `,
            className
         )}
         {...props}
      />
   )
}

export { Skeleton }
