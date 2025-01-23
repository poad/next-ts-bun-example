import tseslint from 'typescript-eslint';
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
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
  },
);
