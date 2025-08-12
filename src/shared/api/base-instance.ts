import ky from 'ky'

export const baseInstance = ky.create({
   prefixUrl: process.env.NEXT_PUBLIC_API_URL,
   credentials: 'include',
})
