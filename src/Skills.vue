<template>
  <section id="skills" class="py-20 border-b transition-colors duration-500"
    :style="{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', borderColor: 'var(--border-color)' }">
    <div class="container mx-auto px-6">

      <!-- Section Title -->
      <div class="skills-title text-center mb-16 opacity-0">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4">
          Mes <span class="text-[#E8481C]">Compétences</span>
        </h2>
        <p class="max-w-xl mx-auto text-[var(--text-muted)] text-base md:text-lg">
          Un panel complet d'expertises allant du développement backend et de l'intégration IA à la sécurité et à
          l'infrastructure DevOps.
        </p>
        <div class="w-12 h-1 bg-[#E8481C] mx-auto mt-4 rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Left Column: Core Technical Areas -->
        <div class="skills-left opacity-0">
          <h3 class="text-2xl font-bold mb-6 border-b border-[var(--border-color)] pb-2 flex items-center gap-2">
            <Icon icon="lucide:terminal" class="text-[#E8481C]" />
            Expertises Techniques
          </h3>

          <div class="space-y-6">
            <div v-for="skill in technicalSkills" :key="skill.name" class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="font-medium text-sm md:text-base flex items-center gap-2">
                  <Icon :icon="skill.icon" class="text-[#E8481C] text-lg" />
                  {{ skill.name }}
                </span>
                <span class="text-xs font-mono font-bold">{{ skill.percent }}%</span>
              </div>
              <div
                class="w-full h-2.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden">
                <div class="progress-bar h-full rounded-full bg-[#E8481C]" :data-percent="skill.percent"
                  style="width: 0%"></div>
                </div>
              </div>
            </div>
          </div>

        <!-- Right Column: Specialized Categories -->
        <div class="skills-right opacity-0">
          <h3 class="text-2xl font-bold mb-6 border-b border-[var(--border-color)] pb-2 flex items-center gap-2">
            <Icon icon="lucide:cpu" class="text-[#D4A017]" />
            Spécialités IA, Sécurité & Outils
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="cat in skillCategories" :key="cat.name"
              class="skill-cat-card p-5 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl shadow-md hover:border-[#E8481C] transition-all duration-300">
              <h4 class="font-bold text-sm uppercase tracking-wider text-[#D4A017] mb-3 flex items-center gap-2">
                <Icon :icon="cat.icon" class="w-4 h-4" />
                {{ cat.name }}
              </h4>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="item in cat.items" :key="item"
                  class="text-[10px] md:text-xs px-2.5 py-1 rounded bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-muted)] font-mono">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { Icon } from "@iconify/vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technicalSkills = [
  { name: "Vue.js 3 & JS", percent: 95, icon: "vscode-icons:file-type-vue" },
  { name: "Laravel & PHP", percent: 80, icon: "vscode-icons:file-type-php" },
  { name: "Python (IA / Data)", percent: 75, icon: "vscode-icons:file-type-python" },
  { name: "MySQL & BDD", percent: 80, icon: "vscode-icons:file-type-mysql" },
  { name: "Docker & DevOps", percent: 70, icon: "vscode-icons:file-type-docker" }
];

const skillCategories = [
  {
    name: "IA & Agents",
    icon: "lucide:bot",
    items: ["Agents IA", "MCP (Anthropic)", "Intégration LLM", "n8n", "Prompt Eng."]
  },
  {
    name: "Sécurité Web",
    icon: "lucide:shield-check",
    items: ["OWASP Top 10", "JWT", "WebAuthn", "RBAC", "Validation"]
  },
  {
    name: "DevOps & Outils",
    icon: "lucide:settings",
    items: ["Docker", "Kubernetes", "CI/CD Actions", "Git Flow", "Vercel"]
  },
  {
    name: "Concepts Clean",
    icon: "lucide:layers",
    items: ["Clean Architecture", "SOLID", "Design Patterns", "Agile/Scrum"]
  }
];

onMounted(() => {
  // Title Reveal
  gsap.fromTo(
    ".skills-title",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".skills-title",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );

  // Left Column & Progress Bars Animation
  gsap.fromTo(
    ".skills-left",
    { opacity: 0, x: -30 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".skills-left",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      onComplete: () => {
        // Animate each progress bar width
        const bars = document.querySelectorAll(".progress-bar");
        bars.forEach((bar) => {
          const targetPercent = bar.getAttribute("data-percent");
          gsap.to(bar, {
            width: targetPercent + "%",
            duration: 1.2,
            ease: "power2.out"
          });
        });
      }
    }
  );

  // Right Column & Category Cards Reveal
  gsap.fromTo(
    ".skills-right",
    { opacity: 0, x: 30 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".skills-right",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );

  // Stagger reveal on sub-cards
  gsap.fromTo(
    ".skill-cat-card",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".skills-right",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    }
  );
});
</script>
