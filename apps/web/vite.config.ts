import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
// import { tanstackRouter } from '@tanstack/router-plugin/vite';
import babel from "@rolldown/plugin-babel"
// import { devtools } from '@tanstack/devtools-vite';
import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // tanstackRouter({ autoCodeSplitting: true, target: 'react' }),
    // devtools(),

    tanstackStart(),
    // Nitro before TanStack Start matches Nitro + TSR docs and keeps SSR chunk graph stable.
    nitro({preset: 'bun'}),
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
    dedupe: ["react", "react-dom"],
  },
})
