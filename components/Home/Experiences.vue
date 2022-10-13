<template>
  <div id="works" class="bg-black text-white pt-16 flex flex-col">
    <div class="container max-w-4xl mx-auto h-full px-3 xl:px-0">
      <SectionTitle :number="3" title="Mes expériences" class="mb-5" />
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
              {{ experience.dates }}
              <span v-if="experience.website">
                -
                <a
                  :href="experience.website"
                  class="hover:text-primary transition"
                  target="_blank"
                  >{{ experience.website }}</a
                >
              </span>
            </div>
            <div class="mt-3" v-html="experience.description"></div>
          </div>
        </div>
      </template>
      <div class="flex justify-center mt-10">
        <a
          href="#contact"
          class="btn bg-transparent hover:bg-primary border-primary text-primary hover:text-black"
        >
          <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M17.29 5.71a.996.996 0 0 0-1.41 0L12 9.58L8.11 5.7A.996.996 0 1 0 6.7 7.11l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.984.984 0 0 0 0-1.4z"
            />
            <path
              fill="currentColor"
              d="M17.29 12.3a.996.996 0 0 0-1.41 0L12 16.17l-3.88-3.88a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.993.993 0 0 0-.01-1.4z"
            />
          </svg>
          Contactez-moi
        </a>
      </div>
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
    title: "Développeur fullstack",
    website: "https://asapidea.com",
    dates: "Juillet 2022 - Août 2022",
    description: `
        <p class="mb-2">Asapidea est une entreprise française qui vise à mobiliser des communautés d’étudiants pour répondre aux problématiques des entreprises. </p>
        <p class="mb-2">Asapidea organise des défis à idées sur une plateforme dédiée aux étudiants. Ils profitent d’un espace de réflexion unique et personnalisé selon vos enjeux.</p>
        <p class="mb-2">En tant que lead dev (et unique dev) j'ai construit tout le stack technique de la plateforme asapidea, avec des logiques complexes de défis et de focus groups à organiser.</p>
        <p class="mb-2">L'espace d'administration permet également à l'équipe d'asapidea de récupérer les données pré-analysées pour les transmettre ensuite aux clients.</p>
    `,
  },
  {
    id: 3,
    company: "GeminiQuant",
    title: "Développeur fullstack",
    website: null,
    dates: "Octobre 2021 - Décembre 2021",
    description: `
        <p class="mb-2">GeminiQuant brings the next generation portfolio intelligence to asset managers. Thanks to a cutting-edge combination of machine learning and quantitative finance, we provide them with a unique intelligent newsfeed backed by a powerful portfolio analytics engine.</p>
        <ul class="list-disc ml-4">
            <li>Développement de tout le stack technique de GeminiQuant à partir de maquettes et de cahier de charges</li>
            <li>Backend sous Django DRF avec des endpoints permettant des calculs financiers complexes</li>
            <li>Frontend sous VueJS / Bulma (Buefy)</li>
            <li>Connexion à différentes API externes (Refinitiv)</li>
            <li>Docker & CircleCI pour le devOps</li>
        </ul>
    `,
  },
  {
    id: 4,
    company: "ODDO BHF",
    title: "Trader Fixed Income",
    website: "https://oddo-bhf.com",
    dates: "Juillet 2020 - Juillet 2022",
    description: `
        <p class="mb-2">Arrivé en tant que trader sur le marché du crédit, j'avais la responsabilité un book de trading portant sur le marché du crédit IG européen.</p>
        
        <p class="mb-2">Compétences acquises :</p>
        <ul class="list-disc ml-4">
            <li>Gestion des risques dans un environnement à haute pression.</li>
            <li>Décision d'investissement dans un minimum de temps.</li>
            <li>Développement de plusieurs softwares d'aide à la décision en C# (.NET Framework).</li>
            <li>Développement d'un outil de mise à disposition instantanée de statistiques couplé à Bloomberg et l'API Bloomberg.</li>
            <li>Développement de plusieurs automates de trading avec des algos écrits en .NET (ULLINK, Marvelsoft, Bloomberg)</li>
            <li>Développement de différents dashboard pour la mise à disposition de statistiques et l'analyse historique des flux. Sous VueJS et Django DRF.</li>
            <li>Création d'architecture client-serveur avec Python.</li>
            <li>Développement d'un algorithme de matching d'obligations en Python. Dashboard créé avec Django.</li>
            <li>Création d'un pricer d'obligations bullet et callable sous C#.</li>
        </ul>
    `,
  },
];
</script>
