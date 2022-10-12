<template>
  <div id="works" class="bg-black text-white pt-16 flex flex-col">
    <div class="container max-w-4xl mx-auto h-full px-3 xl:px-0">
      <SectionTitle :number="2" title="Mes expériences" class="mb-5" />
      <template
        class="flex flex-1 h-full"
        v-for="experience in experiences"
        :key="experience.id"
      >
        <div class="flex gap-12 flex-1 h-full">
          <div class="flex flex-col items-center flex-1">
            <div class="w-6 h-6 bg-primary rounded-full"></div>
            <div class="w-[1px] flex-1 bg-white"></div>
          </div>
          <div class="pb-14">
            <div class="text-xl">
              {{ experience.title }}
            </div>
            <div class="text-white/60">
              {{ experience.dates }} -
              <a
                :href="experience.website"
                class="hover:text-primary transition"
                target="_blank"
                >{{ experience.website }}</a
              >
            </div>
            <div class="mt-3" v-html="experience.description"></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const selectedExperience = ref(0);
const experiences = [
  {
    id: 1,
    company: "Neoresid",
    title: "Développeur fullstack",
    website: "https://neoresid.com",
    dates: "Août - Octobre 2022",
    description: `
        <p class="mb-2">Refonte totale du stack web de Neoresid from scratch. </p>
        <p class="mb-2">Développement sous Django avec un site permettant de mettre en avant les différentes résidences étudiantes de la société partout en France, de visualiser et de déposer un dossier de candidature.</p>
        <p class="mb-2">Une autre plateforme d'administration a été développé permettant à l'équipe marketing de modifier complètement le contenu du site et de paramétrer les fonctionnalités complexes de celui-ci. Les différents employés au niveau des résidences ont également un accès spécifique pour gérer leur résidence.</p>
        <p class="mb-2">Un gros travail a été fait au niveau du SEO pour attirer un maximum de trafic.</p>
    `,
  },
  {
    id: 2,
    company: "ODDO BHF",
    title: "Trader Fixed Income",
    website: "https://oddo-bhf.com",
    dates: "Juillet 2020 - Juillet 2022",
    description: `
        <p class="mb-2">Refonte totale du stack web de Neoresid from scratch. </p>
        <p class="mb-2">Développement sous Django avec un site permettant de mettre en avant les différentes résidences étudiantes de la société partout en France, de visualiser et de déposer un dossier de candidature.</p>
        <p class="mb-2">Une autre plateforme d'administration a été développé permettant à l'équipe marketing de modifier complètement le contenu du site et de paramétrer les fonctionnalités complexes de celui-ci. Les différents employés au niveau des résidences ont également un accès spécifique pour gérer leur résidence.</p>
        <p class="mb-2">Un gros travail a été fait au niveau du SEO pour attirer un maximum de trafic.</p>
    `,
  },
];
</script>
