import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/tests/*.spec.*'],
    globals: true,
    setupFiles: './tests/setup.ts',
    environment: 'jsdom',
  },
});
