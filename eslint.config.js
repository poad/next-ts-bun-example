// @ts-check

import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import { dirname } from "path";
import { fileURLToPath } from "url";
import { includeIgnoreFile } from '@eslint/compat';
import path from "node:path";
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gitignorePath = path.resolve(__dirname, ".gitignore");

export default tseslint.config(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
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
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
      '@next/next': nextPlugin,
      '@stylistic': stylistic,
      '@stylistic/ts': stylisticTs,
      '@stylistic/jsx': stylisticJsx,
      'react-hooks': reactHooksPlugin,
    },
    extends: [
      ...compat.config(jsxA11yPlugin.configs.recommended),
    ],
    settings: {
      react: {
        version: 'detect',
      },
      formComponents: ['Form'],
      linkComponents: [
        { name: 'Link', linkAttribute: 'to' },
        { name: 'NavLink', linkAttribute: 'to' },
      ],
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },
);
