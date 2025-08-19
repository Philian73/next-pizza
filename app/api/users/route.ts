import type { NextRequest } from 'next/server'

import { hash } from 'bcryptjs'
import { NextResponse } from 'next/server'

import { prisma } from '@/shared/lib/prisma'

export async function GET() {
   const users = await prisma.user.findMany({
      omit: {
         password: true,
      },
   })

   return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
   const { password, email, fullName } = (await request.json()) as {
      fullName: string
      email: string
      password: string
   }

   if (await prisma.user.count({ where: { email } })) {
      return NextResponse.json(
         { messages: [{ field: 'email', message: 'Этот email уже используется.' }] },
         { status: 409 }
      )
   }

   const hashedPassword = await hash(password, 10)

   const user = await prisma.user.create({
      data: {
         fullName,
         email,
         password: hashedPassword,
      },
      omit: {
         password: true,
      },
   })

   return NextResponse.json(user)
}
