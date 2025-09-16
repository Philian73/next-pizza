/* eslint-disable no-console */

import { prisma } from '../prisma-client'
import { SEED } from './constants'

async function createUsers() {
   const users = SEED.getUsers()

   console.log(`Created: Users`)

   await prisma.user.createMany({
      data: users,
   })
}

async function createCategories() {
   const categories = SEED.getCategories()

   console.log(`Created: Categories`)

   await prisma.category.createMany({
      data: categories,
   })
}

async function createSizes() {
   const sizes = SEED.getSizes()

   console.log(`Created: Sizes`)

   await prisma.size.createMany({
      data: sizes,
   })
}

async function createIngredients() {
   const ingredients = SEED.getIngredients()

   console.log(`Created: Ingredients`)

   await prisma.ingredient.createMany({
      data: ingredients,
   })
}

async function createToppings() {
   const toppings = await SEED.getToppings()

   console.log(`Created: Toppings and their prices`)

   for (const topping of toppings) {
      await prisma.topping.create({
         data: topping,
      })
   }
}

async function createProducts() {
   const products = await SEED.getProducts()

   console.log(`Created: Products, products traits`)

   for (const product of products) {
      await prisma.product.create({
         data: product,
      })
   }
}

async function createProductVariations() {
   const productsVariations = await SEED.getProductVariations()

   console.log(`Created: Products Variations, food values`)

   for (const productsVariation of productsVariations) {
      await prisma.productVariation.create({
         data: productsVariation,
      })
   }
}

async function up() {
   await createUsers()
   await createCategories()
   await createSizes()
   await createIngredients()
   await createToppings()
   await createProducts()
   await createProductVariations()
}

async function down() {
   console.log('DB cleanup is starting...')

   await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "sizes" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "ingredients" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "toppings" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "topping_prices_by_size" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "products" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "product_traits" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "product_variations" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "product_variation_ingredients" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "product_variation_food_values" RESTART IDENTITY CASCADE;`
}

async function main() {
   try {
      await down()
      await up()
   } catch (error) {
      console.error(error)
   }
}

main()
   .then(async () => {
      await prisma.$disconnect()
   })
   .catch(async error => {
      console.error(error)

      await prisma.$disconnect()

      process.exit(1)
   })
