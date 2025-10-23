<script setup></script>

<template>
  <header class="relative overflow-hidden bg-gradient-to-r from-[#0a192f] to-[#112240] " id="about">
    <article
      class="max-w-screen-xl mx-auto px-4 sm:px-8 py-16 md:py-28 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
      <!-- Hero image -->
      <figure data-aos="fade-up" data-aos-delay="400" class="w-full lg:w-1/2 flex justify-center relative">
        <div class="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
          <img src="../assets/apropos.jpg" alt="" class="relative z-10 rounded-3xl shadow-2xl w-full object-cover"
            width="400" height="400" loading="eager" />
        </div>
      </figure>

      <!-- Hero content -->
      <section class="w-full lg:w-1/2 text-center lg:text-left">
        <hgroup data-aos="fade-up" data-aos-delay="400">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#dfe2e2] mb-2">
            À <span class="text-[#00FFFF]">propos</span>
          </h2>
          <h4 class="text-1xl sm:text-3xl md:text-4xl  font-bold pb-3 text-[#e6ebeb] mb-2">
            Développeur Full Stack
          </h4>
          <p class="text-base text-center sm:text-lg text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0">
            "Je suis passionné par la technologie et
            l'innovation. Curieux et en constante évolution, j'aime explorer de
            nouveaux outils et frameworks pour concevoir des sites web et applications
            efficaces, intuitives et centrées sur l'utilisateur. Mon approche
            repose sur un équilibre entre design élégant, code robuste et une
            expérience utilisateur fluide. Au-delà de la technique, je crois que
            le développement est l'art de résoudre des problèmes concrets et
            d'apporter des solutions utiles à tous."
          </p>
        </hgroup>
        <button>
          <a href="#contact"
            class="px-4 py-2 bg-[#00FFFF] text-black font-semibold rounded-full hover:shadow-[0_0_15px_#00FFFF] transition"
            data-aos="fade-up" data-aos-delay="500">
            En savoir plus sur moi
          </a>
        </button>
      </section>
    </article>
  </header>
</template>
