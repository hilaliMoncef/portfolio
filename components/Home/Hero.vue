<template>
  <div
    id="hero"
    class="h-screen container mx-auto pt-16 flex flex-col px-3 xl:px-0"
  >
    <div class="flex items-center h-full">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-primary text-opacity-60">Salut, je m'appelle</h1>
        <div
          class="text-primary text-6xl md:text-8xl font-karla font-bold uppercase"
        >
          Moncef
        </div>
        <h2 class="text-muted text-lg">
          Je suis développeur full-stack spécialisé dans la construction
          d'expériences digitales et d'applications complexes web ou desktop.
        </h2>
        <div class="flex gap-4">
          <a
            href="#about"
            class="btn bg-transparent hover:bg-primary border-primary text-primary hover:text-black mt-5"
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
            En savoir plus
          </a>
          <a
            href="#contact"
            class="btn bg-transparent hover:bg-white border-white text-white hover:text-black mt-5"
            >Contactez-moi</a
          >
        </div>
      </div>
    </div>
    <a href="#about" class="self-center">
      <svg
        class="w-10 h-10 mb-4 text-gray-500 cursor-pointer hover:text-white transition duration-200 animate-bounce"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm39.6-87.6a8 8 0 0 1 0 11.3l-33.9 34a8.2 8.2 0 0 1-11.4 0l-33.9-34a8 8 0 0 1 11.3-11.3l20.3 20.3V88a8 8 0 0 1 16 0v60.7l20.3-20.3a8 8 0 0 1 11.3 0Z"
        />
      </svg>
    </a>
  </div>
</template>
