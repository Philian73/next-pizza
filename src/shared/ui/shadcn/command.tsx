'use client'

import { SearchIcon, XIcon } from 'lucide-react'
import * as React from 'react'

import { Command as CommandPrimitive } from 'cmdk'

import { cn } from '@/shared/lib/utils'
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
} from '@/shared/ui/shadcn/dialog'

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
   return (
      <CommandPrimitive
         data-slot={'command'}
         className={cn(
            `
               flex h-full w-full flex-col overflow-hidden rounded-md bg-popover
               text-popover-foreground
            `,
            className
         )}
         {...props}
      />
   )
}

function CommandDialog({
   title = 'Command Palette',
   description = 'Search for a command to run...',
   children,
   className,
   showCloseButton = true,
   commandProps,
   ...props
}: React.ComponentProps<typeof Dialog> & {
   title?: string
   description?: string
   className?: string
   showCloseButton?: boolean
   commandProps?: Omit<React.ComponentProps<typeof CommandPrimitive>, 'children'>
}) {
   return (
      <Dialog {...props}>
         <DialogHeader className={'sr-only'}>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
         </DialogHeader>
         <DialogContent
            className={cn(
               `
                  overflow-hidden p-0
                  sm:max-w-2xl
               `,
               className
            )}
            showCloseButton={showCloseButton}
         >
            <Command
               {...commandProps}
               className={cn(
                  `
                     **:data-[slot=command-input-wrapper]:h-12
                     [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium
                     [&_[cmdk-group-heading]]:text-muted-foreground
                     [&_[cmdk-group]]:px-2
                     [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0
                     [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5
                     [&_[cmdk-input]]:h-12
                     [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3
                     [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5
                  `,
                  commandProps?.className
               )}
            >
               {children}
            </Command>
         </DialogContent>
      </Dialog>
   )
}

function CommandInput({
   className,
   ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
   return (
      <div
         data-slot={'command-input-wrapper'}
         className={'flex h-9 items-center gap-2 border-b px-3'}
      >
         <SearchIcon className={'size-4 shrink-0 opacity-50'} />
         <CommandPrimitive.Input
            data-slot={'command-input'}
            className={cn(
               `
                  flex h-10 w-full rounded-md bg-transparent py-3 outline-hidden
                  placeholder:text-muted-foreground
                  disabled:cursor-not-allowed disabled:opacity-50
               `,
               className
            )}
            {...props}
         />
         {!!props?.value && !!props?.onValueChange && (
            <button
               className={`
                  transition-colors
                  hover:text-primary
               `}
               type={'button'}
               onClick={() => props?.onValueChange?.('')}
            >
               <XIcon className={'size-4 shrink-0 opacity-50'} />
            </button>
         )}
      </div>
   )
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
   return (
      <CommandPrimitive.List
         data-slot={'command-list'}
         className={cn('max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto', className)}
         {...props}
      />
   )
}

function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
   return (
      <CommandPrimitive.Empty
         data-slot={'command-empty'}
         className={'py-6 text-center'}
         {...props}
      />
   )
}

function CommandGroup({
   className,
   ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
   return (
      <CommandPrimitive.Group
         data-slot={'command-group'}
         className={cn(
            `
               overflow-hidden p-1 text-foreground
               [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5
               [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-medium
               [&_[cmdk-group-heading]]:text-muted-foreground
            `,
            className
         )}
         {...props}
      />
   )
}

function CommandSeparator({
   className,
   ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
   return (
      <CommandPrimitive.Separator
         data-slot={'command-separator'}
         className={cn('-mx-1 h-px bg-border', className)}
         {...props}
      />
   )
}

function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
   return (
      <CommandPrimitive.Item
         data-slot={'command-item'}
         className={cn(
            `
               relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 outline-hidden
               select-none
               data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50
               data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground
               [&_svg]:pointer-events-none [&_svg]:shrink-0
               [&_svg:not([class*='size-'])]:size-4
               [&_svg:not([class*='text-'])]:text-muted-foreground
            `,
            className
         )}
         {...props}
      />
   )
}

function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>) {
   return (
      <kbd
         data-slot={'command-shortcut'}
         className={cn(
            `
               pointer-events-none ml-auto inline-flex h-5 items-center rounded border bg-muted
               px-1.5 align-middle font-mono text-[11px] font-medium tracking-widest
               text-muted-foreground select-none
            `,
            className
         )}
         {...props}
      />
   )
}

export {
   Command,
   CommandDialog,
   CommandInput,
   CommandList,
   CommandEmpty,
   CommandGroup,
   CommandItem,
   CommandShortcut,
   CommandSeparator,
}
