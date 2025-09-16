import type { Prisma } from '@prisma/client'

type Size = Prisma.SizeUncheckedCreateInput

const SIZES = [
   {
      name: '20 см',
   },
   {
      name: '25 см',
   },
   {
      name: '30 см',
   },
   {
      name: '35 см',
   },
   {
      name: '1 шт',
   },
   {
      name: '2 шт',
   },
   {
      name: '3 шт',
   },
   {
      name: '4 шт',
   },
   {
      name: '5 шт',
   },
   {
      name: '8 шт',
   },
   {
      name: '9 шт',
   },
   {
      name: '10 шт',
   },
   {
      name: '16 шт',
   },
   {
      name: 'Стандартная',
   },
   {
      name: 'Большая',
   },
   {
      name: '0.3 л',
   },
   {
      name: '0.4 л',
   },
   {
      name: '0.45 л',
   },
   {
      name: '0.5 л',
   },
   {
      name: '0.6 л',
   },
   {
      name: '1 л',
   },
] as const satisfies Size[]

const getSizes = () => SIZES

type SizeName = (typeof SIZES)[number]['name']

export { getSizes }
export type { SizeName }
