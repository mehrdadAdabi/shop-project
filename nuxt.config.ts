// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // @ts-ignore
  devtools: { enabled: false },
  modules: ['@pinia/nuxt'],
  // @ts-ignore
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  plugins: [
    {src: '~/plugins/setAuthData.client.ts', mode: 'client'}
  ],
})
