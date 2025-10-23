<template>
  <section id="projects" class="py-16 bg-gradient-to-r from-[#0a192f] to-[#112240] text-white">
    <div class="container mx-auto px-4">
      <!-- Titre -->
      <h2 class="text-4xl font-bold text-center mb-4" data-aos="fade-up">
        Mes <span class="text-[#00FFFF]">Projets</span>
      </h2>
      <p class="text-center text-gray-300 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Découvrez une sélection de mes réalisations récentes, alliant créativité, performance et expérience utilisateur.
      </p>

      <!-- Swiper Carousel -->
      <div class="relative" data-aos="fade-up" data-aos-delay="200">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
          }"
          :navigation="true"
          :breakpoints="{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }"
          class="projects-swiper pb-12"
        >
          <swiper-slide v-for="(project, index) in projects" :key="index">
            <div
              class="bg-[#112240] rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 h-full flex flex-col"
              :style="{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)' }"
            >
              <!-- Image du projet -->
              <div class="relative overflow-hidden h-48 bg-[#0a192f]">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover hover:scale-110 transition duration-500"
                  loading="lazy"
                />
                <div class="absolute top-4 right-4 bg-[#00FFFF] text-black px-3 py-1 rounded-full text-xs font-semibold">
                  {{ project.category }}
                </div>
              </div>

              <!-- Contenu -->
              <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-xl font-semibold mb-2 text-white">
                  {{ project.title }}
                </h3>
                <p class="text-sm text-gray-300 mb-4 flex-1">
                  {{ project.description }}
                </p>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="(tech, techIndex) in project.technologies"
                    :key="techIndex"
                    class="flex items-center gap-1 bg-[#0a192f] text-[#00FFFF] px-2 py-1 rounded-full text-xs"
                  >
                    <Icon :icon="tech.icon" class="text-sm" />
                    {{ tech.name }}
                  </span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Statistiques -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16" data-aos="fade-up" data-aos-delay="300">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="bg-[#112240] rounded-xl p-6 text-center hover:scale-105 transform transition duration-300"
          :style="{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)' }"
        >
          <Icon :icon="stat.icon" class="text-4xl text-[#00FFFF] mb-2 inline-block" />
          <h4 class="text-3xl font-bold text-white mb-1">{{ stat.value }}</h4>
          <p class="text-sm text-gray-300">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images importées
import img1 from './assets/project1.jpg';
import img2 from './assets/project2.jpg';
import img3 from './assets/Project4.png';
import img4 from './assets/project3.jpg';
import img5 from './assets/Project6.png';
import img6 from './assets/Project5.jpg';

const modules = [Navigation, Pagination, Autoplay];

// Projets
const projects = ref([
  {
    title: "Portfolio Personnel",
    description: "Un portfolio moderne et responsive présentant mes compétences et réalisations avec des animations fluides et un design élégant.",
    image: img1,
    category: "Web Design",
    technologies: [
      { name: "Vue.js", icon: "vscode-icons:file-type-vue" },
      { name: "Tailwind", icon: "vscode-icons:file-type-tailwind" },
      { name: "AOS", icon: "mdi:animation" },
    ],
  },
  {
    title: "Application E-commerce",
    description: "Plateforme e-commerce complète avec gestion de panier, paiement sécurisé et interface administrateur intuitive.",
    image: img2,
    category: "Full Stack",
    technologies: [
      { name: "React", icon: "vscode-icons:file-type-reactjs" },
      { name: "Node.js", icon: "vscode-icons:file-type-node" },
      { name: "MongoDB", icon: "vscode-icons:file-type-mongo" },
    ],
  },
  {
    title: "Application Mobile social",
    description: "Application sociale mobile de chat et interface intuitive.",
    image: img3,
    category: "Mobile",
    technologies: [
      { name: "Flutter", icon: "vscode-icons:file-type-flutter" },
      { name: "Firebase", icon: "vscode-icons:file-type-firebase" },
      { name: "Dart", icon: "vscode-icons:file-type-dartlang" },
    ],
  },
  {
    title: "Beauty project",
    description: "Site pour un cabinet medicale dans le domaine de la cosmetique et de la chirurgie.",
    image: img4,
    category: "Web App",
    technologies: [
      { name: "Vue.js", icon: "vscode-icons:file-type-vue" },
      { name: "Chart.js", icon: "mdi:chart-line" },
      { name: "API REST", icon: "mdi:api" },
    ],
  },
  {
    title: "Site de sondage",
    description: "Mettre en évidence les problèmes digitaux qui persistent au Benin et trouver des solutions efficaces et définitives.",
    image: img5,
    category: "Enterprise",
    technologies: [
      { name: "html", icon: "vscode-icons:file-type-html" },
      { name: "Laravel", icon: "vscode-icons:file-type-laravel" },
      { name: "MySQL", icon: "vscode-icons:file-type-mysql" },
    ],
  },
  {
    title: "Galaxie exploreur",
    description: "Plateforme d'apprentissage pour les passionnés de l'astrologie et du cosmos.",
    image: img6,
    category: "CMS",
    technologies: [
      { name: "JavaScript", icon: "vscode-icons:file-type-js-official" },
      { name: "Markdown", icon: "mdi:language-markdown" },
      { name: "SEO", icon: "mdi:search-web" },
    ],
  },
]);

// Statistiques
const stats = ref([
  { icon: "mdi:check-circle", value: "50+", label: "Projets Complétés" },
  { icon: "mdi:account-group", value: "30+", label: "Clients Satisfaits" },
  { icon: "mdi:coffee", value: "1000+", label: "Tasses de Café" },
  { icon: "mdi:trophy", value: "15+", label: "Prix Remportés" },
]);
</script>

<style scoped>
/* Swiper custom styles */
.projects-swiper :deep(.swiper-button-next),
.projects-swiper :deep(.swiper-button-prev) {
  color: #00ffff;
  background: rgba(17, 34, 64, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.projects-swiper :deep(.swiper-button-next):hover,
.projects-swiper :deep(.swiper-button-prev):hover {
  background: rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 15px #00ffff;
}

.projects-swiper :deep(.swiper-button-next)::after,
.projects-swiper :deep(.swiper-button-prev)::after {
  font-size: 18px;
}

.projects-swiper :deep(.swiper-pagination-bullet) {
  background: #00ffff;
  opacity: 0.5;
  width: 10px;
  height: 10px;
}

.projects-swiper :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  box-shadow: 0 0 10px #00ffff;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .projects-swiper :deep(.swiper-button-next),
  .projects-swiper :deep(.swiper-button-prev) {
    width: 35px;
    height: 35px;
  }

  .projects-swiper :deep(.swiper-button-next)::after,
  .projects-swiper :deep(.swiper-button-prev)::after {
    font-size: 16px;
  }
}
</style>
