import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

export default tseslint.config(
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: ['./src/**/*.{ts,tsx}'],
    ignores: [
      '**/*.d.ts',
      '*.js',
      'src/tsconfig.json',
      'src/next-env.d.ts',
      'src/stories',
      'node_modules/**/*',
      'out',
      './.next/*'
    ],
    ...compat.config({
      extends: ['eslint:recommended', 'next'],
    }),
  },
);
