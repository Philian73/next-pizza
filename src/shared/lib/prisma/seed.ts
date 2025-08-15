import { SEEDS } from './constants'

const { USERS, CATEGORIES, INGREDIENTS, PRODUCTS, PRODUCT_ITEMS } = SEEDS

import type { Prisma } from '@prisma/client'

import slugify from 'slugify'

import { prisma } from './prisma-client'

async function createUsers() {
   await prisma.user.createMany({
      data: USERS,
   })
}

async function createCategories() {
   for (const category of CATEGORIES) {
      let slug = slugify(category.name, {
         lower: true,
         remove: /[*+~.()'"!:@]/g,
         replacement: '-',
         strict: false,
         trim: true,
      })

      while (await prisma.category.findUnique({ where: { slug } })) {
         slug = `${slug}-${category.id}`
      }

      await prisma.category.create({
         data: {
            ...category,
            slug,
         },
      })
   }
}

async function createIngredients() {
   await prisma.ingredient.createMany({
      data: INGREDIENTS,
   })
}

async function createProducts() {
   const ingredients = INGREDIENTS.map((ingredient, index) => ({ ...ingredient, id: index + 1 }))

   for (let i = 0; i < PRODUCTS.length; i++) {
      const product = PRODUCTS[i]

      const baseSlug = slugify(product.name, {
         lower: true,
         remove: /[*+~.()'"!:@]/g,
         replacement: '-',
         strict: false,
         trim: true,
      })

      let slug = baseSlug

      while (await prisma.product.findUnique({ where: { slug } })) {
         slug = `${baseSlug}-${product.id}`
      }

      await prisma.product.create({
         data: {
            ...product,
            slug,
            ...(product.categoryId === 1 && {
               ingredients: {
                  connect:
                     /* eslint-disable-next-line no-nested-ternary */
                     i === 0
                        ? ingredients.slice(0, 5)
                        : i === 1
                          ? ingredients.slice(5, 10)
                          : ingredients,
               },
            }),
         },
      })
   }
}

async function createProductItems() {
   await prisma.productItem.createMany({
      data: PRODUCT_ITEMS,
   })
}

async function createCartForTestUsers() {
   const users = await prisma.user.findMany()

   const data: Prisma.CartUncheckedCreateInput[] = users.map(user => ({
      userId: user.id,
      totalAmount: 0,
      token: crypto.randomUUID(),
   }))

   await prisma.cart.createMany({
      data,
   })
}

async function createCartItemsForTestUsers() {
   const carts = await prisma.cart.findMany()

   let ingredientId = 1

   const data: Prisma.CartItemUncheckedCreateInput[] = carts.map((cart, index) => ({
      cartId: cart.id,
      productItemId: index + 1,
      quantity: index + 2,
      ingredients: {
         connect: Array.from({ length: 3 }, () => ({
            id: ingredientId++,
         })),
      },
   }))

   for (const cartItem of data) {
      await prisma.cartItem.create({ data: cartItem })
   }
}

async function up() {
   await createUsers()

   await createCategories()

   await createIngredients()

   await createProducts()

   await createProductItems()

   await createCartForTestUsers()

   await createCartItemsForTestUsers()
}

async function down() {
   await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`
   await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`
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
