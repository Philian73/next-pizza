import type { Prisma } from '@prisma/client'
import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

import { prisma } from '@/shared/lib/prisma'

export async function GET(request: NextRequest) {
   const onlyWithProducts = request.nextUrl.searchParams.get('onlyWithProducts') === 'true'

   try {
      const where: Prisma.CategoryWhereInput = {
         ...(onlyWithProducts && { products: { some: {} } }),
      }

      const categories = await prisma.category.findMany({ where })

      return NextResponse.json(categories, { status: 200 })
   } catch (error) {
      console.error(`[GET /categories]`, error)

      return NextResponse.json(
         { message: 'Не удалось получить категории', code: 500 },
         { status: 500 }
      )
   }
}
