/* eslint-disable perfectionist/sort-imports */
import { getUsers } from './users'
import { getCategories } from './categories'
import { getSizes } from './sizes'
import { getIngredients } from './ingredients'
import { getToppings } from './toppings'
import { getProducts } from './products'
import { getProductVariations } from './product-variations'

export const SEED = {
   getUsers,
   getCategories,
   getSizes,
   getIngredients,
   getToppings,
   getProducts,
   getProductVariations,
}
