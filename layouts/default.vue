<template>
  <div class="bg-black text-white relative h-screen">
    <EmailIndicator />
    <TheHeader />
    <slot />
  </div>
</template>

<script setup>
useHead({
  title: "Moncef Hilali - Développeur fullstack pour vos projets web",
  meta: [
    {
      name: "description",
      content:
        "Bonjour, je m'appelle Moncef et je suis développeur fullstack basé à Paris depuis 2015. Je travaille principalement avec Python (Django) et Javascript (Vue.js / Nuxt.js). Découvrez mes travaux, mes compétences et comment nous pouvons collaborer ensemble.",
    },
  ],
  htmlAttrs: {
    class: "scroll-smooth",
    lang: "fr",
  },
  bodyAttrs: {
    class: "bg-black text-white",
  },
});
</script>
