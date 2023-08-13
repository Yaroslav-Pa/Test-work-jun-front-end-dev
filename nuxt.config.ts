// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Simple Task Manager",
      htmlAttrs: {
        lang: "eng",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/icon.png" }],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
});
