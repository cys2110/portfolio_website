// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui-pro"],
  css: ["~/assets/css/main.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],
  vite: {
    vue: {
      features: { propsDestructure: true }
    }
  },
  ui: {
    theme: {
      colors: ["primary", "secondary", "neutral", "warning", "error", "success", "info"]
    }
  }
})
