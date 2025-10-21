import type { ComponentProps } from 'react'

import { CircleArrowLeft, CircleXIcon } from 'lucide-react'
import { Fragment, useCallback } from 'react'

import { cn } from '@/shared/lib/utils'

import { useProductStore } from '../model/choice-product-store'
import { useChooseProductFilters } from '../model/use-choose-product-filters'

type IngredientsProps = Omit<ComponentProps<'div'>, 'children'>

export const Ingredients = ({ className, ...rest }: IngredientsProps) => {
   const { removedIngredients, handleIngredientsChange } = useChooseProductFilters()

   const ingredients = useProductStore(State => State.ingredientsWithoutBasic)

   const toggleIngredient = useCallback(
      (ingredientId: string) => () => {
         const index = removedIngredients.indexOf(ingredientId)
         const newArray = [...removedIngredients]

         if (index === -1) {
            newArray.push(ingredientId)
         } else {
            newArray.splice(index, 1)
         }

         handleIngredientsChange(newArray)
      },
      [removedIngredients, handleIngredientsChange]
   )

   return (
      <div className={cn('text-sm', className)} {...rest}>
         {ingredients.map((ingredient, index, arr) => {
            const name = ingredient.details.name
            const transformName =
               index === 0 ? name.charAt(0).toUpperCase() + name.substring(1) : name.toLowerCase()

            const isLast = index === arr.length - 1
            const hasRemoved = removedIngredients.includes(ingredient.ingredientId)

            return (
               <Fragment key={ingredient.ingredientId}>
                  {ingredient.choiceType !== 'NONE' ? (
                     <button
                        type={'button'}
                        className={cn(
                           `inline-flex items-center gap-0.5 line-through`,
                           !hasRemoved && `underline decoration-dotted underline-offset-[0.215em]`
                        )}
                        onClick={toggleIngredient(ingredient.ingredientId)}
                     >
                        <span>{transformName}</span>
                        <span>
                           {hasRemoved ? (
                              <CircleArrowLeft strokeWidth={1} size={16} />
                           ) : (
                              <CircleXIcon strokeWidth={1} size={16} />
                           )}
                        </span>
                     </button>
                  ) : (
                     transformName
                  )}

                  {isLast ? null : ', '}
               </Fragment>
            )
         })}
      </div>
   )
}
