<template>
  <section
    id="skills"
    ref="skillsSection"
    class="pt-32 pb-16 px-6 md:px-20 bg-[#0a192f]"
  >
    <h2 class="text-4xl font-bold text-center mb-16 text-white">
      Mes <span class="text-cyan-400">Compétences</span>
    </h2>
    <div class="md:flex md:gap-16">
      <!-- Technical Skills -->
      <div class="md:w-1/2 mb-16 md:mb-0" data-aos="fade-right">
        <h3
          class="text-2xl font-semibold mb-6 border-b-2 text-white inline-block"
        >
          Compétences Techniques
        </h3>
        <div
          v-for="skill in technicalSkills"
          :key="skill.name"
          class="mb-6 text-white"
        >
          <div class="flex items-center justify-between mb-1">
            <div class="flex items-center gap-2">
              <Icon :icon="skill.icon" class="text-2xl" />
              <span>{{ skill.name }}</span>
            </div>
            <span>{{ skill.percent }}%</span>
          </div>
          <div class="w-full h-4 bg-black rounded-full">
            <div
              class="h-4 rounded-full bg-cyan-400 transition-all duration-2000"
              :style="{ width: isVisible ? skill.percent + '%' : '0%' }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Professional Skills -->
      <div class="md:w-1/2 grid grid-cols-2 gap-8" data-aos="fade-left">
        <h3
          class="col-span-2 text-2xl font-semibold mb-6 border-b-2 text-white inline-block"
        >
          Compétences Professionnelles
        </h3>
        <div
          v-for="skill in professionalSkills"
          :key="skill.name"
          class="flex flex-col items-center text-white"
        >
          <div class="relative w-36 h-36 circle-progress">
            <svg width="140" height="140" class="transform -rotate-90">
              <!-- Cercle de fond -->
              <circle
                cx="70"
                cy="70"
                r="55"
                stroke="black"
                stroke-width="10"
                fill="none"
              />
              <!-- Cercle de progression -->
              <circle
                cx="70"
                cy="70"
                r="55"
                stroke="cyan"
                stroke-width="10"
                fill="none"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="
                  isVisible
                    ? circumference * (1 - skill.percent / 100)
                    : circumference
                "
              />
            </svg>
            <!-- Texte centré -->
            <div
              class="absolute inset-0 flex items-center justify-center text-xl font-semibold"
            >
              {{ skill.percent }}%
            </div>
          </div>
          <span class="mt-4">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import AOS from "aos";
import "aos/dist/aos.css";

const isVisible = ref(false);
const skillsSection = ref(null);
// Rayon = 55 -> circonférence
const circumference = 2 * Math.PI * 55;

const technicalSkills = ref([
  { name: "HTML", percent: 90, icon: "vscode-icons:file-type-html" },
  { name: "CSS", percent: 75, icon: "vscode-icons:file-type-css" },
  {
    name: "JavaScript",
    percent: 85,
    icon: "vscode-icons:file-type-js-official",
  },
  { name: "Python", percent: 50, icon: "vscode-icons:file-type-python" },
  { name: "Vue.js", percent: 90, icon: "vscode-icons:file-type-vue" },
  { name: "React", percent: 12, icon: "vscode-icons:file-type-reactjs" },
  { name: "Php", percent: 80, icon: "vscode-icons:file-type-php" },
  { name: "Flutter", percent: 50, icon: "vscode-icons:file-type-flutter" },
]);

const professionalSkills = ref([
  { name: "Créativité", percent: 90 },
  { name: "Communication", percent: 65 },
  { name: "Résolution de problèmes", percent: 75 },
  { name: "Travail d'équipe", percent: 85 },
]);

// Fonction pour déclencher l'animation
const triggerAnimation = () => {
  isVisible.value = false;
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
};

// Intersection Observer pour détecter quand la section est visible
let observer = null;

onMounted(() => {
  AOS.init({ duration: 1000, once: false });

  // Configuration de l'Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          triggerAnimation();
        }
      });
    },
    {
      threshold: 0.3, // Se déclenche quand 30% de la section est visible
      rootMargin: "0px 0px -100px 0px", // Déclenche un peu avant que la section soit complètement visible
    }
  );

  // Observer la section skills
  if (skillsSection.value) {
    observer.observe(skillsSection.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
/* Animation fluide */
.circle-progress circle {
  transition: stroke-dashoffset 2s;
}
</style>
