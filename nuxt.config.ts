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
  vite:{
  server:{
    proxy:{'/api':"https://shop-api.codeyad-project.ir/"}
  }
  }
})


// reverseProxy
// در این متد درخواست به صورت سرور سایت میره سمت سرور و دیگه درخواست از سمت مرورگر نمیره
// برای جلوگیری از خطای cors
