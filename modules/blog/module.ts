import { defineNuxtModule } from '@nuxt/kit'
import { resolve, join } from 'path'
import type { Nuxt } from '@nuxt/schema'

export default defineNuxtModule({
  meta: {
    name: 'blog-module',
    configKey: 'blog-module',
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
        name: 'blog-page',
        path: '/blog/:id',
        file: resolve(__dirname, './pages/blog/edit.vue')
      })
    })

    // Pinia store modules are auto imported
  }
})