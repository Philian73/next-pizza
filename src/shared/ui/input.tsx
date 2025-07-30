'use client'

import type {
   ComponentProps,
   ElementType,
   KeyboardEventHandler,
   MouseEventHandler,
   ReactNode,
} from 'react'

import type { VariantProps } from 'class-variance-authority'

import { EyeIcon, EyeOffIcon, SearchIcon, XIcon } from 'lucide-react'
import { useState, useId } from 'react'

import { cva } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'
import { Label } from '@/shared/ui/shadcn/label'
import { Typography } from '@/shared/ui/typography'

// === InputIcon =========================================================================
const inputIconVariants = cva(
   `
      size-5.5 text-muted-foreground/50 transition-colors
      aria-invalid:text-destructive
      aria-[invalid=false]:enabled:hover:text-muted-foreground
      [&_svg]:size-5.5
   `,
   {
      defaultVariants: {
         position: 'left',
      },
      variants: {
         position: {
            left: 'absolute top-1/2 left-3 -translate-y-1/2 transform',
            right: 'absolute top-1/2 right-3 -translate-y-1/2 transform',
         },
      },
   }
)

type InputIconProps<T extends ElementType> = VariantProps<typeof inputIconVariants> & {
   as?: T
}

const InputIcon = <T extends ElementType = 'div'>({
   as,
   children,
   className,
   position,
   ...rest
}: InputIconProps<T> & Omit<ComponentProps<T>, keyof InputIconProps<T>>) => {
   if (!children) {
      return null
   }

   const Component = as ?? 'div'

   return (
      <Component className={cn(inputIconVariants({ className, position }))} {...rest}>
         {children}
      </Component>
   )
}
// =======================================================================================

type InputProps = {
   endIcon?: ReactNode
   errorMessage?: string
   classNames?: {
      root?: string
      label?: string
      inputWrapper?: string
      startIcon?: string
      input?: string
      endIcon?: string
   }
   label?: string
   onEndIconClick?: MouseEventHandler<HTMLButtonElement>
   startIcon?: ReactNode
} & Omit<ComponentProps<'input'>, 'className'>

const Input = ({
   disabled,
   id,
   errorMessage,
   onEndIconClick,
   startIcon,
   endIcon,
   classNames,
   label,
   ...props
}: InputProps) => {
   const generatedId = useId()
   const inputId = id ?? generatedId

   const showError = (!!errorMessage && errorMessage.length > 0) || !!props?.['aria-invalid']

   return (
      <div
         aria-disabled={disabled}
         aria-invalid={showError}
         className={cn('flex w-full flex-col gap-1', classNames?.root)}
      >
         {!!label && (
            <Label className={classNames?.label} htmlFor={inputId}>
               {label}
            </Label>
         )}

         <div className={cn('relative flex-1', classNames?.inputWrapper)}>
            <InputIcon
               className={classNames?.startIcon}
               aria-invalid={showError}
               as={'label'}
               htmlFor={inputId}
            >
               {startIcon}
            </InputIcon>

            <input
               data-slot={'input'}
               {...props}
               className={cn(
                  `
                     flex h-12 w-full min-w-0 rounded-md border border-input bg-transparent px-3
                     py-1 text-base shadow-xs transition-[color,box-shadow] outline-none
                     selection:bg-primary selection:text-primary-foreground
                     file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm
                     file:font-medium file:text-foreground
                     placeholder:text-muted-foreground
                     disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
                     dark:bg-input/30
                  `,
                  'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
                  `
                     aria-invalid:border-destructive aria-invalid:text-destructive
                     aria-invalid:ring-destructive/20
                     dark:aria-invalid:ring-destructive/40
                  `,
                  startIcon && 'pl-11.5',
                  endIcon && 'pr-11.5',
                  classNames?.input
               )}
               id={inputId}
               aria-invalid={showError}
               disabled={disabled}
            />

            <InputIcon
               aria-invalid={showError}
               as={'button'}
               className={cn('disabled:pointer-events-none', classNames?.endIcon)}
               disabled={disabled}
               onClick={onEndIconClick}
               position={'right'}
               type={'button'}
            >
               {endIcon}
            </InputIcon>
         </div>

         {showError && <Typography variant={'error'}>{errorMessage}</Typography>}
      </div>
   )
}

// =======================================================================================

const InputEmail = ({
   autoCapitalize = 'off',
   spellCheck = false,
   ...rest
}: Omit<InputProps, 'type'>) => {
   return <Input autoCapitalize={autoCapitalize} spellCheck={spellCheck} {...rest} type={'email'} />
}

// =======================================================================================

const InputPassword = ({
   onEndIconClick,
   autoCapitalize = 'off',
   onKeyUp,
   spellCheck = false,
   ...rest
}: Omit<InputProps, 'type' | 'endIcon'>) => {
   const [showPassword, setShowPassword] = useState(false)
   const [capsLockOn, setCapsLockOn] = useState(false)

   const type = (showPassword ? 'text' : 'password') satisfies InputProps['type']

   const toggleShowPassword = () => {
      setShowPassword(prev => !prev)
   }

   const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = e => {
      setCapsLockOn(e.getModifierState('CapsLock'))
   }

   return (
      <>
         <Input
            autoCapitalize={autoCapitalize}
            spellCheck={spellCheck}
            {...rest}
            endIcon={showPassword ? <EyeOffIcon /> : <EyeIcon />}
            onKeyUp={e => {
               handleKeyPress(e)
               onKeyUp?.(e)
            }}
            onEndIconClick={toggleShowPassword}
            type={type}
         />

         {capsLockOn && (
            <Typography className={'mt-1'} variant={'warning'}>
               Caps Lock включен
            </Typography>
         )}
      </>
   )
}

// =======================================================================================

const InputSearch = ({
   onEndIconClick,
   ...rest
}: Omit<InputProps, 'startIcon' | 'type' | 'endIcon'>) => {
   const shouldShowClearButton = !!onEndIconClick && !!rest?.value

   return (
      <Input
         onEndIconClick={onEndIconClick}
         {...rest}
         startIcon={<SearchIcon />}
         endIcon={shouldShowClearButton && <XIcon />}
         type={'search'}
      />
   )
}

export { Input, InputEmail, InputPassword, InputSearch }
