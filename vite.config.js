import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { config } from './src/config.js'

const escapar = (t) =>
  String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function metaDoConfig() {
  return {
    name: 'meta-do-config',
    transformIndexHtml(html) {
      return html
        .replaceAll('%TITULO%', escapar(config.tituloAba))
        .replaceAll('%DESCRICAO%', escapar(config.descricaoSEO))
    },
  }
}

export default defineConfig({
  base: '/nutriFitAcademy/',
  plugins: [react(), tailwindcss(), metaDoConfig()],
})
