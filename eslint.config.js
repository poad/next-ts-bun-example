import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';

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
    ],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-duplicate-head': 'off',
      '@next/next/no-img-element': 'error',
    },
  },
  {
    ignores: ['./.next/*'],
  },
);
