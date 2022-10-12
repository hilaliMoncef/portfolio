<template>
  <div id="contact" class="h-screen bg-black text-white relative">
    <div class="container mx-auto pt-16 flex h-full px-3 xl:px-0">
      <div
        class="max-w-2xl mx-auto flex flex-col justify-center items-start h-full w-full"
      >
        <SectionTitle :number="4" title="Restons en contact" />
        <p class="text-lg my-5">
          A la recherche d'une nouvelle aventure ou non, je suis toujours à
          l'écoute d'opportunités et toujours ouvert à la discussion.
        </p>
        <a
          href="mailto:hilali.moncef@gmail.com"
          class="btn self-center bg-transparent hover:bg-primary border-primary text-primary hover:text-black mt-5"
        >
          hilali.moncef@gmail.com
        </a>
      </div>
    </div>

    <TheFooter />
  </div>
</template>
