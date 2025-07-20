import next from '@next/eslint-plugin-next'
import baseConfig from '@philian73/eslint-config'
import betterTailwind from 'eslint-plugin-better-tailwindcss'
import turbo from 'eslint-plugin-turbo'

export default [
   ...baseConfig,
   {
      plugins: {
         '@next/next': next,
         'better-tailwindcss': betterTailwind,
         turbo,
      },
      rules: {
         ...next.configs.recommended.rules,
         ...betterTailwind.configs['recommended-warn'].rules,
         ...betterTailwind.configs['recommended-error'].rules,
         ...turbo.configs.recommended.rules,
         'turbo/no-undeclared-env-vars': 'error',
         'better-tailwindcss/sort-classes': 'warn',
         'better-tailwindcss/enforce-consistent-line-wrapping': [
            'warn',
            {
               printWidth: 100,
               lineBreakStyle: 'windows',
               group: 'newLine',
               indent: 3,
            },
         ],
      },
      settings: {
         'better-tailwindcss': {
            entryPoint: 'src/app/globals.css',
         },
      },
   },
]
