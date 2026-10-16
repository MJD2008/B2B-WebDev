// One Astro project builds one client site at a time.
// Pick the client with the CLIENT env var: CLIENT=bakkerij-lieven npm run build
// PREVIEW=1 builds a self-contained copy with relative links (for sharing a demo as a file).
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: { format: 'file', inlineStylesheets: 'always' },
  outDir: `./dist/${process.env.CLIENT ?? 'bakkerij-lieven'}`,
  devToolbar: { enabled: false },
});
