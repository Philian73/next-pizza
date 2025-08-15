import type { FetchOptions } from 'openapi-fetch'

import type { paths, components, operations } from './generated'

export type ApiPaths = paths
export type ApiSchemas = components['schemas']
export type ApiOperations = operations
export type ApiOptions<Op extends keyof operations> = FetchOptions<operations[Op]>
