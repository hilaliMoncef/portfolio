import redirectSSL from "redirect-ssl";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  buildModules: ["@nuxtjs/google-fonts"],
  serverMiddleware: [
    redirectSSL.create({ enabled: process.env.NODE_ENV === "production" }),
  ],
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
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-44R2GWJ5JZ",
          async: true,
        },
        {
          type: "text/javascript",
          children: `
          window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-44R2GWJ5JZ');`,
        },
      ],
      noscript: [],
    },
  },
});
