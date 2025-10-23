<template>
  <section id="services" class="py-16 bg-[#0a192f] text-white ">
    <div class="container mx-auto px-4 text-center">
      <!-- Titre -->
      <h2 class="text-4xl font-bold mb-12" data-aos="fade-up">
        Mes <span class="text-[#00FFFF]">Services</span>
      </h2>

      <!-- Grille des cartes -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Carte 1 -->
        <div
          class="bg-[#112240] rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300 relative"
          data-aos="fade-up"
        >
          <Icon
            icon="mdi:code-tags"
            class="text-4xl text-[#00FFFF] mb-4 inline-block"
          />
          <h3 class="text-xl font-semibold mb-2">Design UI/UX</h3>
          <p class="text-sm text-center text-gray-300 mb-6">
            "Je conçois des interfaces intuitives et esthétiques, en plaçant
            l'expérience utilisateur au cœur de chaque projet. Mon approche
            allie ergonomie, design moderne et simplicité pour créer des
            applications fluides et agréables, répondant aux vrais besoins des
            utilisateurs."
          </p>
          <a
            href="#contact"
            class="px-4 py-2 bg-[#00FFFF] text-black font-semibold rounded-full hover:shadow-[0_0_15px_#00FFFF] transition"
          >
            En savoir plus
          </a>
        </div>

        <!-- Carte 2 -->
        <div
          class="bg-[#112240] rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300 relative"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Icon
            icon="mdi:web"
            class="text-4xl text-[#00FFFF] mb-4 inline-block"
          />
          <h3 class="text-xl font-semibold mb-2">Web Design</h3>
          <p class="text-sm text-center text-gray-300 mb-6">
            "Je conçois des sites web modernes et responsives alliant esthétique
            et performance. Mon objectif est de créer des interfaces claires et
            engageantes, offrant une expérience fluide tout en répondant aux
            besoins spécifiques de chaque projet."
          </p>
          <a
            href="#contact"
            class="px-4 py-2 bg-[#00FFFF] text-black font-semibold rounded-full hover:shadow-[0_0_15px_#00FFFF] transition"
          >
            En savoir plus
          </a>
        </div>

        <!-- Carte 3 -->
        <div
          class="bg-[#112240] rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300 relative"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Icon
            icon="mdi:apple"
            class="text-4xl text-[#00FFFF] mb-4 inline-block"
          />
          <h3 class="text-xl font-semibold mb-2">Design d'Applications</h3>
          <p class="text-sm text-center text-gray-300 mb-6">
            "Je crée des applications mobiles performantes et intuitives, avec
            un accent sur l'ergonomie et l'expérience utilisateur. Chaque
            application est pensée pour être fluide, engageante et parfaitement
            adaptée aux besoins des utilisateurs."
          </p>
          <a
            href="#contact"
            class="px-4 py-2 bg-[#00FFFF] text-black font-semibold rounded-full hover:shadow-[0_0_15px_#00FFFF] transition"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
/* Effet glow autour des cartes */
.bg-\[\#112240\] {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
}
</style>
