import baseConfig from '@philian73/eslint-config'
import next from '@philian73/eslint-config/next'
import tailwind from '@philian73/eslint-config/tailwind'

export default [
   ...baseConfig,
   ...next,
   ...tailwind,
   {
      files: ['src/shared/lib/prisma/seed/**/*.{js,ts}', 'src/shared/api/schema/generated.ts'],
      rules: {
         'max-lines': 'off',
      },
   },
]
