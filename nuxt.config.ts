// https://v3.nuxtjs.org/api/configuration/nuxt.config
// Modify the `nuxt.config.ts` file by adding to the `export default defineNuxtConfig()`
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: ''
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]
})
