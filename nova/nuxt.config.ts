// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules: [
        ["@pinia/next", {
            autoImports: ["defineStore", "acceptHRMUpdate"]
        }],
     ],
     /* alias: {
        pinia: "nide_modules...pinia.mjs"
     } */
})
