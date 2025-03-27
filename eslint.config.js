import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'no-console': 'off',
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    ...prettier,
  },
];
