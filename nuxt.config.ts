// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConig: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
});
