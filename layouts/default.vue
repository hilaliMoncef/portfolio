<template>
  <div class="bg-black text-white relative h-screen">
    <EmailIndicator />
    <TheHeader />
    <slot />
  </div>
</template>

<script setup>
useHead({
  title: "Moncef Hilali - Développeur fullstack",
  meta: [
    {
      name: "description",
      content:
        "Bonjour, je m'appelle Moncef et je suis développeur fullstack depuis 2015. Découvrez mes travaux, mes compétences et comment nous pouvons collaborer ensemble.",
    },
  ],
  htmlAttrs: {
    class: "scroll-smooth",
  },
  bodyAttrs: {
    class: "bg-black text-white",
  },
});
</script>
