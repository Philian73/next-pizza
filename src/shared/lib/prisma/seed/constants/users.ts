import type { Prisma } from '@prisma/client'

import { hashSync } from 'bcryptjs'

type User = Prisma.UserUncheckedCreateInput

const hashedPassword = hashSync('@123Qwe', 10)

const USERS = [
   {
      fullName: 'Тестовый Юзер',
      email: 'test@next-pizza.ru',
      password: hashedPassword,
      isVerified: true,
   },
   {
      fullName: 'Тестовый Админ',
      email: 'admin@next-pizza.ru',
      password: hashedPassword,
      isVerified: true,
      role: 'ADMIN',
   },
] satisfies User[]

const getUsers = () => USERS

export { getUsers }
