// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  buildModules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Karla: true,
      Inconsolata: true,
    },
  },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "canonical",
          href: "https://moncefhilali.com",
        },
      ],
      style: [],
      script: [],
      noscript: [],
    },
  },
});
