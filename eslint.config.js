//  @ts-check
import { tanstackConfig } from '@tanstack/eslint-config'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

export default [
  ...tanstackConfig,
  prettierRecommended,
  {
    rules: {
      'import/no-cycle': 'off',
      'sort-imports': 'off',
      'pnpm/json-enforce-catalog': 'off',
      'no-case-declarations': 2,
      'prefer-destructuring': 1,
      'no-param-reassign': 2,
      'no-console': 2,
      'no-self-compare': 2,
      'no-irregular-whitespace': 2,
      'arrow-body-style': 1,
      complexity: [1, 7],
      'array-bracket-newline': [1, 'consistent'],
      'function-call-argument-newline': [1, 'consistent'],
      'func-style': [1, 'declaration'],
      'prefer-exponentiation-operator': 2,

      'padding-line-between-statements': [
        1,
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['if', 'try', 'class', 'export'],
        },
        {
          blankLine: 'always',
          prev: ['if', 'try', 'class', 'export'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var', 'export'],
          next: ['const', 'let', 'var', 'export'],
        },
        {
          blankLine: 'always',
          prev: ['expression'],
          next: ['const', 'let', 'var'],
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['return'],
        },
      ],

      'arrow-spacing': 1,

      'no-restricted-exports': [
        1,
        {
          restrictedNamedExports: ['default', 'then'],
        },
      ],

      'import/order': [
        1,
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          pathGroupsExcludedImportTypes: ['constants'],
          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },

          warnOnUnassignedImports: true,
        },
      ],

      'import/prefer-default-export': 0,
      'import/extensions': 0,
      'import/no-unresolved': 0,
    },
  },
  {
    files: ['eslint.config.js', 'prettier.config.js'],
    ...tseslint.configs.disableTypeChecked,
  },
]
