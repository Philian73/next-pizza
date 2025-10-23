import type { ApiPaths } from './schema'

import createFetchClient from 'openapi-fetch'

export const baseInstance = createFetchClient<ApiPaths>({
   baseUrl: process.env.NEXT_PUBLIC_API_URL,
   credentials: 'include',
   headers: {
      'Content-Type': 'application/json',
   },
})
