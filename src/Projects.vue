<template>
  <div class="py-20 transition-colors duration-500"
    :style="{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }">

    <!-- ================= SECTION 1: PROJETS WEB ================= -->
    <section id="projects" class="container mx-auto px-6 mb-32">
      <!-- Section Title -->
      <div class="text-center mb-16 web-projects-title opacity-0">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4">
          Projets <span class="text-[#E8481C]">Web & Mobile</span>
        </h2>
        <p class="max-w-2xl mx-auto text-[var(--text-muted)] text-lg">
          Une sélection de réalisations techniques sur-mesure, conçues pour être rapides, robustes et esthétiquement
          mémorables.
        </p>
        <div class="w-16 h-1 bg-[#E8481C] mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Alternating Project List -->
      <div class="space-y-24 md:space-y-36">
        <div v-for="(project, index) in webProjects" :key="index"
          class="web-project-row flex flex-col md:flex-row items-center gap-8 md:gap-16 opacity-0"
          :class="index % 2 === 1 ? 'md:flex-row-reverse' : ''">
          <!-- Image Column with Hover Zoom/Overlay -->
          <div
            class="w-full md:w-1/2 group relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] aspect-video cursor-pointer interactive">
            <img :src="project.image" :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy" />
            <!-- Overlay on Hover -->
            <div
              class="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
              <h4 class="text-white text-xl font-bold mb-2">{{ project.title }}</h4>
              <p class="text-gray-300 text-sm mb-4 max-w-sm">{{ project.hoverDesc }}</p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span v-for="(tech, tIdx) in project.technologies" :key="tIdx"
                  class="bg-white/10 text-white border border-white/20 px-3 py-1 rounded-full text-xs font-mono">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- Content Column -->
          <div class="w-full md:w-1/2 flex flex-col items-start">
            <div class="text-sm font-mono text-[#E8481C] uppercase tracking-wider mb-2">
              Projet Réalisé
            </div>
            <h3 class="text-2xl md:text-3xl font-bold mb-4 text-[var(--text-color)]">
              {{ project.title }}
            </h3>

            <!-- Tech stack tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="(tech, tIdx) in project.technologies" :key="tIdx"
                class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-muted)]">
                <Icon :icon="getTechIcon(tech)" class="text-sm text-[#E8481C]" />
                {{ tech }}
              </span>
            </div>

            <p class="text-base leading-relaxed mb-8 text-[var(--text-muted)]">
              {{ project.description }}
            </p>

            <!-- Buttons -->
            <div class="flex flex-wrap gap-4">
              <button @click="navigateDemo(project.demoLink)"
                class="interactive inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-[#E8481C] hover:bg-opacity-95 transition-all duration-300 shadow-md">
                {{ project.demoLink === '#' ? 'En construction' : 'Voir le projet' }}
                <Icon :icon="project.demoLink === '#' ? 'lucide:hard-hat' : 'lucide:external-link'" class="w-4 h-4" />
              </button>
              <a :href="project.codeLink" target="_blank" rel="noopener noreferrer"
                class="interactive inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold border border-[var(--border-color)] hover:border-[#E8481C] hover:text-[#E8481C] transition-all duration-300">
                Voir le code
                <Icon icon="lucide:github" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- ── CTA Buttons ── -->
      <div class="projects-cta mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
        <router-link to="/projects"
          class="interactive group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-[#E8481C] border border-[#E8481C] hover:bg-transparent hover:text-[#E8481C] transition-all duration-300 shadow-lg hover:shadow-[#E8481C]/20 transform hover:scale-105 active:scale-95">
          <Icon icon="lucide:layout-grid" class="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
          Voir tous mes projets
        </router-link>

        <router-link to="/cv"
          class="interactive group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-300 transform hover:scale-105 active:scale-95">
          <Icon icon="lucide:file-text"
            class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-[-2px]" />
          Consulter mon CV
        </router-link>
      </div>
    </section>

    <!-- ================= SECTION 2: AVENTURE ENTREPRENEURIALE ================= -->
    <section id="entrepreneurship" class="container mx-auto px-6">
      <!-- Section Title -->
      <div class="text-center mb-16 entrepreneurial-title opacity-0">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4">
          Aventure <span class="text-[#D4A017]">Entrepreneuriale</span>
        </h2>
        <p class="max-w-2xl mx-auto text-[var(--text-muted)] text-lg">
          Bâtir des solutions à impact. L'innovation au service du développement et de la valorisation du patrimoine.
        </p>
        <div class="w-16 h-1 bg-[#D4A017] mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Main Highlight Block: MiWa -->
      <div
        class="miwa-block max-w-5xl mx-auto bg-[var(--card-bg)] border-2 border-[#D4A017]/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-16 opacity-0">
        <!-- Floating Accent Glow -->
        <div
          class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#D4A017] filter blur-[120px] opacity-10 pointer-events-none">
        </div>

        <div class="relative z-10">
          <!-- MiWa Content -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <span
                class="font-mono text-xs uppercase tracking-widest px-3 py-1 bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20 rounded-full">
                Projet Phare / Fondateur
              </span>
            </div>
            <h3 class="text-3xl md:text-4xl font-extrabold text-[var(--text-color)] mb-4">
              MiWa
            </h3>

            <p class="text-lg md:text-xl font-medium text-[#D4A017] mb-6 italic leading-relaxed">
              "La plateforme de tourisme intelligent connectant la diaspora africaine avec la richesse du patrimoine
              béninois."
            </p>

            <div class="space-y-4 text-base text-[var(--text-muted)] mb-8 leading-relaxed">
              <p>
                <strong>La Vision :</strong> MiWa est née de la volonté d'offrir aux voyageurs et à la diaspora une
                expérience touristique immersive, authentique et personnalisée au Bénin. Grâce à des algorithmes de
                recommandation intelligents, elle simplifie la découverte de lieux, d'événements et de guides certifiés.
              </p>
              <p>
                <strong>L'Impact :</strong> En connectant directement les acteurs locaux avec les voyageurs, MiWa
                favorise une économie touristique circulaire, éthique, valorisant le savoir-faire culturel national et
                facilitant le retour culturel aux sources.
              </p>
            </div>

            <!-- Tech Tags -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span v-for="(tech, idx) in miwaTech" :key="idx"
                class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-muted)]">
                {{ tech }}
              </span>
            </div>

            <a href="https://miwa.bj" target="_blank" rel="noopener noreferrer"
              class="interactive inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-[#D4A017] hover:bg-opacity-95 transition-all duration-300 shadow-lg">
              Découvrir MiWa
              <Icon icon="lucide:arrow-right" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Collaboration Section: Affluo (Discrete) -->
      <div
        class="affluo-block max-w-3xl mx-auto text-center border border-[var(--border-color)] bg-[var(--card-bg)] bg-opacity-40 p-6 md:p-8 rounded-2xl opacity-0">
        <Icon icon="lucide:handshake" class="text-3xl text-[var(--text-muted)] mb-3 mx-auto" />
        <h4 class="text-lg font-bold mb-2">Collaboration Stratégique</h4>
        <p class="text-sm text-[var(--text-muted)] leading-relaxed max-w-xl mx-auto">
          Partenariat de développement et d'accompagnement technologique réalisé en collaboration avec
          <strong>Affluo</strong>. Un engagement continu pour assurer des standards élevés d'ingénierie et d'innovation.
        </p>
      </div>

    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Images importées
import imgUmap from './assets/image1.png';
import imgBloom from './assets/image2.png';
import imgMaestro from './assets/image4.png';
import imgGlamour from './assets/image3.png';
import imgBug from './assets/image6.png';
import imgIdentik from './assets/image7.png';
import imgMiwa from './assets/image5.png'; // We use Project5 as MiWa image for showcase

const router = useRouter();

const navigateDemo = (link) => {
  if (link === '#') {
    router.push('/under-construction');
  } else {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
};

gsap.registerPlugin(ScrollTrigger);

const webProjects = ref([
  {
    title: "Umap",
    description: "Une plateforme digitale épurée et moderne dédiée au reperage des étudiants de l'Universite d'Abomey-Calavi. Intègre une gestion de catalogue raffinée, un parcours utilisateur extrêmement fluide et des micro-animations immersives qui valorisent la marque.",
    hoverDesc: "Expérience digitale haut de gamme axée sur la beauté et les soins personnels.",
    image: imgUmap,
    technologies: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS", "Docker"],
    demoLink: "https://umap-ten.vercel.app",
    codeLink: "https://github.com/Edson4lawson/umap",
  },
  {
    title: "Bloom by Chloe",
    description: "Une plateforme digitale épurée et moderne dédiée au bien-être et à la cosmétique. Intègre une gestion de catalogue raffinée, un parcours utilisateur extrêmement fluide et des micro-animations immersives qui valorisent la marque.",
    hoverDesc: "Expérience digitale haut de gamme axée sur la beauté et les soins personnels.",
    image: imgBloom,
    technologies: ["Vue.js", "Tailwind CSS", "GSAP", "Vite"],
    demoLink: "#",
    codeLink: "https://github.com/Edson4lawson/Bloom-chloe",
  },
  {
    title: "El Maestro",
    description: "Plateforme de restauration complète (site web et application mobile) permettant de consulter le menu, commander en ligne, planifier les livraisons et payer via un système de fidélité et d'avantages clients intégrés.",
    hoverDesc: "Site et application de restauration avec commande, livraison et programme de fidélité.",
    image: imgMaestro,
    technologies: ["Flutter", "Dart", "Firebase", "Node.js"],
    demoLink: "#",
    codeLink: "https://github.com/Edson4lawson/El-Maestro",
  },
  {
    title: "Glamour Chic",
    description: "Site internet professionnel sur-mesure développé pour un institut de chirurgie esthétique et de cosmétologie haut de gamme. Interface rassurante, prise de rendez-vous en ligne optimisée et respect total des critères SEO.",
    hoverDesc: "Plateforme médicale esthétique haut de gamme avec système de réservation.",
    image: imgGlamour,
    technologies: ["Vue.js", "API REST", "Tailwind CSS", "SEO"],
    demoLink: "https://glamourchic.vercel.app/",
    codeLink: "https://github.com/Edson4lawson/Glamour-chic",
  },
  {
    title: "BugOuPas",
    description: "Outil collaboratif et plateforme de sondage conçue pour identifier, recenser et analyser les dysfonctionnements digitaux persistants au Bénin afin d'y apporter des correctifs innovants et durables.",
    hoverDesc: "Plateforme d'analyse et de remontée d'anomalies logicielles citoyenne.",
    image: imgBug,
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Docker"],
    demoLink: "https://bug-oupas.vercel.app",
    codeLink: "https://github.com/Edson4lawson/BugOupas",
  },
  {
    title: "Identik",
    description: "Super-application sociale moderne et sécurisée avec authentification JWT, messagerie en temps réel via Firebase, flux social, Reels, assistant IA et backend PHP MVC. Interface glassmorphism animée.",
    hoverDesc: "Réseau social full-stack avec IA, Reels et chat temps réel.",
    image: imgIdentik,
    technologies: ["Vue.js 3", "PHP 8", "Firebase", "MySQL", "Pinia", "TailwindCSS"],
    demoLink: "#",
    codeLink: "https://github.com/Edson4lawson/identik",
  }
]);

const miwaTech = ref(["Vue.js 3", "Laravel", "Node.js", "Express", "PostgreSQL", "Google Maps API", "Tailwind CSS"]);

// Map technologies to icons helper
const getTechIcon = (tech) => {
  const mapping = {
    "Vue.js": "vscode-icons:file-type-vue",
    "Vue.js 3": "vscode-icons:file-type-vue",
    "Tailwind CSS": "vscode-icons:file-type-tailwind",
    "GSAP": "logos:greensock-icon",
    "Vite": "vscode-icons:file-type-vite",
    "Flutter": "vscode-icons:file-type-flutter",
    "Dart": "vscode-icons:file-type-dartlang",
    "Firebase": "vscode-icons:file-type-firebase",
    "Node.js": "vscode-icons:file-type-node",
    "Express": "vscode-icons:file-type-node",
    "API REST": "mdi:api",
    "SEO": "mdi:search-web",
    "Laravel": "logos:laravel",
    "MySQL": "vscode-icons:file-type-mysql",
    "PostgreSQL": "vscode-icons:file-type-pgsql",
    "Docker": "vscode-icons:file-type-docker",
    "Google Maps API": "mdi:map-marker-outline",
    "PHP 8": "vscode-icons:file-type-php",
    "Pinia": "logos:pinia",
    "TailwindCSS": "vscode-icons:file-type-tailwind"
  };
  return mapping[tech] || "mdi:cog";
};

onMounted(() => {
  // GSAP ScrollTrigger Animations

  // Section 1 Header Reveal
  gsap.fromTo(
    ".web-projects-title",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".web-projects-title",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );

  // Alternating Web Projects Reveal
  const projectRows = gsap.utils.toArray(".web-project-row");
  projectRows.forEach((row) => {
    gsap.fromTo(
      row,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Section 2 Header Reveal
  gsap.fromTo(
    ".entrepreneurial-title",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".entrepreneurial-title",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );

  // MiWa Block Reveal
  gsap.fromTo(
    ".miwa-block",
    { opacity: 0, scale: 0.95, y: 60 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".miwa-block",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );

  // CTA Buttons Reveal
  gsap.fromTo(
    ".projects-cta",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-cta",
        start: "top 90%",
        toggleActions: "play none none none"
      }
    }
  );

  // Affluo Block Reveal
  gsap.fromTo(
    ".affluo-block",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".affluo-block",
        start: "top 90%",
        toggleActions: "play none none none"
      }
    }
  );
});
</script>

<style scoped>
/* Transition duration properties */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
