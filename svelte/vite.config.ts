import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// scss global 옵션
const scssOptions = {
  preprocessorOptions: {
    scss: {
      additionalData: `@import '$lib/scss/app.scss';`,
    },
  },
};
export default defineConfig({
	plugins: [sveltekit()],
	// scss global 적용
	css: scssOptions
});