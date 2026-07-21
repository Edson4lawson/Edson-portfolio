<script setup>
import { ref, computed, onMounted, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgUmap from "../assets/image1.png";
import imgBloom from "../assets/image2.png";
import imgMaestro from "../assets/image4.png";
import imgGlamour from "../assets/image3.png";
import imgBug from "../assets/image6.png";
import imgMiwa from "../assets/image5.png";
import imgIdentik from "../assets/image7.png";

const router = useRouter();

const navigateDemo = (link) => {
  if (link === '#') {
    router.push('/under-construction');
  } else {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
};

gsap.registerPlugin(ScrollTrigger);

const activeFilter = ref("Tous");

const filters = ["Tous", "Web", "Mobile", "IA & Agents", "Entrepreneuriat"];

const allProjects = ref([
  {
    title: "Bloom by Chloe",
    category: "Web",
    year: "2025–2026",
    status: "En production",
    description:
      "Plateforme digitale épurée et moderne dédiée au bien-être et à la cosmétique. Gestion de catalogue raffinée, parcours utilisateur fluide et micro-animations immersives qui valorisent la marque.",
    image: imgBloom,
    technologies: ["Vue.js", "Tailwind CSS", "GSAP", "Vite"],
    demoLink: "#",
    codeLink: "https://github.com/Edson4lawson/Bloom-chloe",
    accentColor: "#E8481C",
  },
  {
    title: "El Maestro",
    category: "Mobile",
    year: "2025",
    status: "En production",
    description:
      "Plateforme de restauration complète (site web et application mobile) permettant de consulter le menu, commander en ligne, planifier les livraisons et payer via un système de fidélité et d'avantages clients intégrés.",
    image: imgMaestro,
    technologies: ["Flutter", "Dart", "Firebase", "Node.js"],
    demoLink: "#",
    codeLink: "https://github.com/Edson4lawson/El-Maestro",
    accentColor: "#E8481C",
  },
  {
    title: "Glamour Chic",
    category: "Web",
    year: "2025",
    status: "En production",
    description:
      "Site professionnel sur-mesure pour un institut de chirurgie esthétique et cosmétologie haut de gamme. Prise de rendez-vous en ligne, interface rassurante, SEO optimisé.",
    image: imgGlamour,
    technologies: ["Vue.js", "API REST", "Tailwind CSS", "SEO"],
    demoLink: "https://glamourchic.vercel.app/",
    codeLink: "https://github.com/Edson4lawson/Glamour-chic",
    accentColor: "#E8481C",
  },
  {
    title: "Umap",
    category: "Web",
    year: "2025",
    status: "En production",
    description:
      "carte inter  actice avec zone deja visite plus messagerie éphémere pour les etudiants de l'Universite d'Abomey-Calavi. Outil estudiantine de reperage.",
    image: imgUmap,
    technologies: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS", "Docker"],
    demoLink: "https://umap-ten.vercel.app",
    codeLink: "https://github.com/Edson4lawson/umap",
    accentColor: "#E8481C",
  },
  {
    title: "BugOuPas",
    category: "Web",
    year: "2025",
    status: "En production",
    description:
      "Plateforme collaborative de sondage pour identifier, recenser et analyser les dysfonctionnements digitaux persistants au Bénin. Outil citoyen d'innovation technologique.",
    image: imgBug,
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Docker"],
    demoLink: "https://bug-oupas.vercel.app",
    codeLink: "https://github.com/Edson4lawson/BugOupas",
    accentColor: "#E8481C",
  },
  {
    title: "Identik",
    category: "Web",
    year: "2026",
    status: "En développement",
    description:
      "Super-application sociale moderne et sécurisée : authentification JWT, messagerie temps réel (Firebase), flux social, Reels, assistant IA et architecture MVC PHP. Interface animée et glassmorphism.",
    image: imgIdentik,
    technologies: ["Vue.js 3", "PHP 8", "Firebase", "MySQL", "Pinia", "TailwindCSS"],
    demoLink: "#",
    codeLink: "https://github.com/Edson4lawson/identik",
    accentColor: "#7c3aed",
  },
  {
    title: "MiWa",
    category: "Entrepreneuriat",
    year: "2026",
    status: "En développement",
    description:
      "Plateforme de tourisme intelligent connectant la diaspora africaine avec la richesse du patrimoine béninois. Algorithmes de recommandation, guides certifiés, économie circulaire.",
    image: imgMiwa,
    technologies: ["Vue.js 3", "Node.js", "Express", "PostgreSQL", "Google Maps API"],
    demoLink: "#",
    codeLink: "https://github.com/Edson4lawson/MiWa",
    accentColor: "#D4A017",
  },
]);

const filteredProjects = computed(() => {
  if (activeFilter.value === "Tous") return allProjects.value;
  return allProjects.value.filter((p) => p.category === activeFilter.value);
});

const getTechIcon = (tech) => {
  const mapping = {
    "Vue.js": "vscode-icons:file-type-vue",
    "Vue.js 3": "vscode-icons:file-type-vue",
    "Tailwind CSS": "vscode-icons:file-type-tailwind",
    "PHP 8": "vscode-icons:file-type-php",
    Pinia: "logos:pinia",
    TailwindCSS: "vscode-icons:file-type-tailwind",
    GSAP: "logos:greensock-icon",
    Vite: "vscode-icons:file-type-vite",
    Flutter: "vscode-icons:file-type-flutter",
    Dart: "vscode-icons:file-type-dartlang",
    Firebase: "vscode-icons:file-type-firebase",
    "Node.js": "vscode-icons:file-type-node",
    Express: "vscode-icons:file-type-node",
    "API REST": "mdi:api",
    SEO: "mdi:search-web",
    Laravel: "logos:laravel",
    MySQL: "vscode-icons:file-type-mysql",
    PostgreSQL: "vscode-icons:file-type-pgsql",
    Docker: "vscode-icons:file-type-docker2",
    "Google Maps API": "mdi:map-marker-outline",
  };
  return mapping[tech] || "mdi:cog";
};

const statusColor = (status) =>
  status === "En production" ? "#22c55e" : "#D4A017";

// Animate cards when filter changes
watch(activeFilter, async () => {
  const cards = document.querySelectorAll('.project-card');
  // Fade out
  await new Promise((resolve) => {
    gsap.to(cards, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      stagger: 0.03,
      onComplete: resolve,
    });
  });
  // Wait for Vue to update DOM
  await nextTick();
  // Fade in new cards
  const newCards = document.querySelectorAll('.project-card');
  gsap.fromTo(
    newCards,
    { opacity: 0, y: 20, scale: 0.97 },
    { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.07, ease: 'power2.out' }
  );
});

onMounted(() => {
  // Page header reveal
  gsap.fromTo(
    ".allprojects-header",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.1 }
  );

  // Filter bar
  gsap.fromTo(
    ".filter-bar",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.3 }
  );

  // Cards stagger
  gsap.fromTo(
    ".project-card",
    { opacity: 0, y: 60, scale: 0.97 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.5,
    }
  );
});
</script>

<template>
  <div class="min-h-screen py-24 transition-colors duration-500"
    :style="{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }">
    <div class="max-w-7xl mx-auto px-6">

      <!-- ── Page Header ── -->
      <header class="allprojects-header opacity-0 text-center mb-16">
        <!-- Back link -->
        <button @click="router.push('/#projects')"
          class="interactive inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#E8481C] transition-colors duration-200 mb-8 group">
          <Icon icon="lucide:arrow-left" class="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Retour
        </button>

        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Tous mes <span class="text-[#E8481C]">Projets</span>
        </h1>
        <p class="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-4">
          Une vitrine complète de mes réalisations — du web au mobile, des agents IA aux aventures entrepreneuriales.
        </p>
        <div class="w-20 h-1 bg-gradient-to-r from-[#E8481C] to-[#D4A017] mx-auto rounded-full"></div>
      </header>

      <!-- ── Filter Bar ── -->
      <nav class="filter-bar opacity-0 flex flex-wrap justify-center gap-3 mb-14" aria-label="Filtres de projets">
        <button v-for="filter in filters" :key="filter" @click="activeFilter = filter"
          class="interactive relative px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 overflow-hidden"
          :class="[
            activeFilter === filter
              ? 'bg-[#E8481C] border-[#E8481C] text-white shadow-lg shadow-[#E8481C]/20'
              : 'border-[var(--border-color)] text-[var(--text-muted)] bg-[var(--card-bg)] hover:border-[#E8481C] hover:text-[#E8481C]'
          ]">
          {{ filter }}
          <!-- Active count badge -->
          <span v-if="filter !== 'Tous'" class="ml-1.5 text-xs opacity-70">
            ({{allProjects.filter(p => p.category === filter).length}})
          </span>
        </button>
      </nav>

      <!-- ── Projects Grid ── -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="project in filteredProjects" :key="project.title"
          class="project-card opacity-0 group relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover:border-[#E8481C]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#E8481C]/10 hover:-translate-y-2 flex flex-col"
          :style="{ '--card-accent': project.accentColor }">
          <!-- Image with overlay -->
          <div class="relative overflow-hidden aspect-video">
            <img :src="project.image" :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy" />
            <!-- Overlay on hover -->
            <div
              class="absolute inset-0 bg-black/70 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button @click="navigateDemo(project.demoLink)"
                class="interactive inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold text-white text-sm transition-all duration-300 hover:scale-105"
                :style="{ backgroundColor: project.accentColor }">
                <Icon :icon="project.demoLink === '#' ? 'lucide:hard-hat' : 'lucide:external-link'" class="w-4 h-4" />
                {{ project.demoLink === '#' ? 'En construction' : 'Voir' }}
              </button>
              <a :href="project.codeLink" target="_blank" rel="noopener noreferrer"
                class="interactive inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold text-white text-sm bg-white/10 border border-white/20 hover:scale-105 transition-all duration-300">
                <Icon icon="lucide:github" class="w-4 h-4" />
                Code
              </a>
            </div>

            <!-- Category badge -->
            <div class="absolute top-3 left-3">
              <span class="font-mono text-xs font-bold px-3 py-1 rounded-full text-white"
                :style="{ backgroundColor: project.accentColor }">
                {{ project.category }}
              </span>
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-6 flex flex-col flex-1">
            <!-- Title + Year + Status -->
            <div class="flex items-start justify-between mb-3">
              <h2
                class="text-lg font-extrabold text-[var(--text-color)] group-hover:text-[var(--card-accent)] transition-colors duration-300">
                {{ project.title }}
              </h2>
              <span class="text-xs font-mono text-[var(--text-muted)] ml-2 whitespace-nowrap mt-0.5">
                {{ project.year }}
              </span>
            </div>

            <!-- Status -->
            <div class="flex items-center gap-1.5 mb-3">
              <span class="w-2 h-2 rounded-full animate-pulse"
                :style="{ backgroundColor: statusColor(project.status) }"></span>
              <span class="text-xs font-medium" :style="{ color: statusColor(project.status) }">
                {{ project.status }}
              </span>
            </div>

            <!-- Description -->
            <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-5 flex-1">
              {{ project.description }}
            </p>

            <!-- Tech tags -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span v-for="(tech, idx) in project.technologies" :key="idx"
                class="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-muted)]">
                <Icon :icon="getTechIcon(tech)" class="text-sm" />
                {{ tech }}
              </span>
            </div>

            <!-- Bottom action links -->
            <div class="flex gap-3 mt-auto">
              <button @click="navigateDemo(project.demoLink)"
                class="interactive flex-1 text-center py-2.5 rounded-lg font-bold text-white text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] inline-flex items-center justify-center gap-1.5"
                :style="{ backgroundColor: project.accentColor }">
                <Icon v-if="project.demoLink === '#'" icon="lucide:hard-hat" class="w-3.5 h-3.5" />
                {{ project.demoLink === '#' ? 'En construction' : 'Voir le projet' }}
              </button>
              <a :href="project.codeLink" target="_blank" rel="noopener noreferrer"
                class="interactive px-4 py-2.5 rounded-lg text-sm font-bold border border-[var(--border-color)] text-[var(--text-muted)] hover:border-[#E8481C] hover:text-[#E8481C] transition-all duration-300">
                <Icon icon="lucide:github" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty state -->
      <div v-if="filteredProjects.length === 0" class="text-center py-20 text-[var(--text-muted)]">
        <Icon icon="lucide:search-x" class="w-12 h-12 mx-auto mb-4 opacity-30" />
        <p class="text-lg">Aucun projet dans cette catégorie pour l'instant.</p>
      </div>

      <!-- ── Bottom CTAs ── -->
      <div
        class="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-[var(--border-color)] pt-12">
        <router-link to="/cv"
          class="interactive group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-300 transform hover:scale-105 active:scale-95">
          <Icon icon="lucide:file-text"
            class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-[-2px]" />
          Consulter mon CV
        </router-link>

        <a href="/#contact"
          @click.prevent="$router.push('/').then(() => { setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 400); })"
          class="interactive group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-[#E8481C] border border-[#E8481C] hover:bg-transparent hover:text-[#E8481C] transition-all duration-300 shadow-lg hover:shadow-[#E8481C]/20 transform hover:scale-105 active:scale-95">
          <Icon icon="lucide:message-square" class="w-5 h-5" />
          Me contacter
        </a>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* No TransitionGroup — filter handled by GSAP watch */
</style>
