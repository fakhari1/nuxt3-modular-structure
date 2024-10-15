import { defineNuxtModule } from '@nuxt/kit'
import { resolve, join } from 'path'
import type { Nuxt } from '@nuxt/schema'

export default defineNuxtModule({
  meta: {
    name: 'front-module',
    configKey: 'front-module',
  },
  setup (options: any, nuxt: Nuxt) {

    // Auto register components
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components')
      })
    })

    // Auto register composables
    nuxt.hook('autoImports:dirs', (dirs) => {
      dirs.push(resolve(__dirname, './composables'))
    })

    // Auto register pages
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'index-page',
        path: '/',
        file: resolve(__dirname, './pages/index.vue')
      })
    })

    // Pinia store modules are auto imported
  }
})