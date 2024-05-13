<template>
  <div id="about" class="min-h-screen bg-black text-white py-16">
    <div
      class="container max-w-4xl mx-auto flex flex-col-reverse md:flex-row gap-8 px-3 xl:px-0"
    >
      <div class="flex-1">
        <SectionTitle :number="1" title="Qui suis-je ?" />

        <div class="mt-5 text-lg">
          <p class="mb-4">
            Bonjour! Je m'appelle <span class="text-primary">Moncef</span>. J'ai
            27 ans. Je suis développeur full-stack basé à Paris.
          </p>
          <p class="mb-4">
            J'ai commencé la programmation à l'âge de 14 ans en essayant
            d'apprendre par moi-même comment créer un jeu vidéo, et depuis, je
            n'ai jamais cessé de m'améliorer. Autodidacte, ma soif
            d'apprentissage me pousse à me dépasser pour mes clients et mes
            projets personnels.
          </p>
          <p class="mb-4">
            Ma curiosité et mon côté passionné font que je suis toujours au
            courant des dernières nouveautés dans mon domaine, des dernières
            sorties et des derniers framework en vogue. La veille technique est
            une qualité indispensable pour devenir et rester un bon développeur.
          </p>
          <p class="mb-6">
            J'ai travaillé dans différents milieux auparavant, de la start-up en
            tant que lead dev fullstack à la banque d'investissement en tant que
            trader et développeur logiciel.
          </p>
          <p class="mb-4">
            Je maîtrise différents langages dont les principaux que sont Python
            et Javascript. En termes de stack technique, j'ai une préference
            pour
            <a
              href="https://www.nuxt.com/"
              target="_blank"
              class="bg-primary p-1 text-black"
              >Nuxt</a
            >
            et l'écosystème
            <a
              href="https://www.vuejs.org/"
              target="_blank"
              class="bg-primary p-1 text-black"
              >Vue</a
            >. Je travaille également très souvent avec
            <a
              href="https://react.dev/"
              target="_blank"
              class="bg-primary p-1 text-black"
              >React</a
            >
            et
            <a
              href="https://nextjs.org/"
              target="_blank"
              class="bg-primary p-1 text-black"
              >Next.js</a
            >.
          </p>
          <p class="mb-6">
            Concernant le développement mobile, je travaille principalement avec
            <a
              href="https://reactnative.dev/"
              target="_blank"
              class="bg-primary p-1 text-black"
            >
              React Native</a
            >
            pour construire des applications mobiles natives sur iOS et Android.
          </p>
          <p class="mb-2">
            Voici certaines des technologies avec lesquelles j'ai récemment
            travaillé :
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2">
            <template v-for="tech in technologies" :key="tech.id">
              <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-primary" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M7.571 11.84C6.908 12.298 6 11.827 6 11.024V4.975c0-.803.908-1.274 1.571-.816l3.784 2.617a1.486 1.486 0 0 1 0 2.447L7.571 11.84Z"
                  />
                </svg>

                {{ tech.name }}
              </div>
            </template>
          </div>

          <div class="flex justify-center mt-5">
            <a
              href="#skills"
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
              Mes technologies
            </a>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center md:items-start mb-10 md:mb-0 gap-8"
      >
        <div class="h-72 w-72 bg-base-100 relative">
          <div
            class="absolute border-2 border-primary m-4 -z-0 w-full h-full"
          ></div>

          <img
            class="absolute left-0 right-0 w-full h-full"
            src="~/assets/images/me.jpeg"
            alt="Moncef Hilali"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const technologies = [
  { id: 2, name: "Typescript" },
  { id: 11, name: "Node.js" },
  { id: 3, name: "Vue 3" },
  { id: 12, name: "React" },
  { id: 14, name: "React Native" },
  { id: 4, name: "Nuxt 3" },
  { id: 13, name: "Next.js 14" },
  { id: 16, name: "Tailwind" },
  { id: 17, name: "Prisma" },
  { id: 5, name: "NestJS" },
  { id: 6, name: "Python" },
  { id: 7, name: "Django et Django DRF" },
  { id: 8, name: "FastAPI" },
  { id: 9, name: "Pandas & Numpy" },
  { id: 10, name: "C#" },
];
</script>
