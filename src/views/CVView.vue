<script setup>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const competencies = ref([
  {
    category: "Backend",
    items: ["Laravel", "PHP (MVC/SOLID)", "Node.js/Express", "Python", "API REST", "JWT", "WebAuthn", "Firebase"]
  },
  {
    category: "Frontend",
    items: ["Vue 3", "Pinia", "Tailwind CSS", "GSAP", "TresJS", "AOS", "Vite", "Responsive Design"]
  },
  {
    category: "IA & Agents",
    items: ["Agents IA", "MCP", "Intégration LLM", "n8n", "Prompt Engineering"]
  },
  {
    category: "Sécurité",
    items: ["OWASP Top 10", "reCAPTCHA v3", "RBAC", "Validation des entrées", "Fondamentaux Cybersécurité"]
  },
  {
    category: "DevOps & Outils",
    items: ["Docker", "Kubernetes", "CI/CD", "Git Flow", "GitHub Actions", "Vercel", "Laragon"]
  },
  {
    category: "Base de données",
    items: ["MySQL", "Conception BDD", "Optimisation des requêtes"]
  },
  {
    category: "Concepts",
    items: ["Clean Architecture", "Design Patterns", "Agile/Scrum", "Intégration API", "i18n"]
  }
]);

const certifications = ref([
  { title: "Introduction au Model Context Protocol (MCP)", organization: "Anthropic", icon: "lucide:cpu" },
  { title: "Claude Code 101", organization: "Anthropic", icon: "lucide:terminal" },
  { title: "Build an AI Agent", organization: "IBM SkillsBuild", icon: "lucide:bot" },
  { title: "Introduction à la Cybersécurité", organization: "Cisco Networking Academy", icon: "lucide:shield-check" },
  { title: "Junior Cybersecurity Analyst Career Path", organization: "Cisco Networking Academy", icon: "lucide:lock" },
  { title: "Développement Web Full-Stack", organization: "Microsoft", icon: "lucide:code-2" }
]);

const selectedProjects = ref([
  { name: "MiWa", role: "Projet phare", date: "2026", hash: "#entrepreneurship", desc: "Plateforme de tourisme intelligent pour la diaspora africaine au Bénin." },
  { name: "Bloom by Chloe", role: "E-Commerce", date: "2025-2026", hash: "#projects", desc: "Plateforme digitale épurée dédiée au bien-être et cosmétiques." },
  { name: "Glamour Chic", role: "Web App", date: "2025", hash: "#projects", desc: "Site et réservation haut de gamme pour institut de beauté." },
  { name: "El Maestro", role: "Web & Mobile App", date: "2025", hash: "#projects", desc: "Plateforme de restauration avec commande, livraison et système de fidélité." }
]);

onMounted(() => {
  // GSAP animations for CV sections
  const sections = gsap.utils.toArray(".cv-section");
  sections.forEach((sec) => {
    gsap.fromTo(
      sec,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Stagger animation for skill categories and badges
  gsap.fromTo(
    ".skill-card",
    { opacity: 0, scale: 0.95, y: 20 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );

  // Stagger animation for certifications cards
  gsap.fromTo(
    ".cert-card",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".certs-grid",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );
});
</script>

<template>
  <div class="min-h-screen py-24 transition-colors duration-500 cv-page-container">
    <div class="max-w-4xl mx-auto px-6">

      <!-- Styled "Paper" CV Container -->
      <article
        class="cv-paper rounded-3xl p-8 md:p-12 shadow-2xl border border-[var(--cv-border)] transition-all duration-500 relative overflow-hidden"
        :style="{ backgroundColor: 'var(--cv-bg)', color: 'var(--cv-text)' }">
        <!-- Top aesthetic ribbon / line -->
        <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E8481C] to-[#D4A017]"></div>

        <!-- ================= HEADER ================= -->
        <header class="cv-section border-b border-[var(--cv-border)] pb-8 mb-8">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                Lawson Edson Goodwin L.
              </h1>
              <div class="flex flex-wrap gap-2 text-sm font-semibold text-[#E8481C] dark:text-[#E8481C] mb-4">
                <span>Développeur Web Full-Stack</span>
                <span class="text-[var(--cv-border)]">•</span>
                <span class="text-[#D4A017]">Ingénieur IA Agentique</span>
                <span class="text-[var(--cv-border)]">•</span>
                <span>Sécurité Web</span>
              </div>
            </div>

            <!-- Quick Contact info -->
            <div class="flex flex-col gap-2 text-xs md:text-sm font-mono text-[var(--cv-muted)]">
              <a href="mailto:Edson4lawson@gmail.com"
                class="interactive link-hover flex items-center gap-2 hover:text-[#E8481C] transition-colors"
                aria-label="Envoyer un email à Edson Lawson">
                <Icon icon="lucide:mail" class="w-4 h-4 text-[#E8481C]" />
                Edson4lawson@gmail.com
              </a>
              <a href="https://edson-lawson.vercel.app" target="_blank" rel="noopener noreferrer"
                class="interactive link-hover flex items-center gap-2 hover:text-[#E8481C] transition-colors"
                aria-label="Visiter le site web de Edson Lawson">
                <Icon icon="lucide:globe" class="w-4 h-4 text-[#E8481C]" />
                edson-lawson.vercel.app
              </a>
              <a href="https://github.com/Edson4lawson" target="_blank" rel="noopener noreferrer"
                class="interactive link-hover flex items-center gap-2 hover:text-[#E8481C] transition-colors"
                aria-label="Visiter le GitHub de Edson Lawson">
                <Icon icon="lucide:github" class="w-4 h-4 text-[#E8481C]" />
                github.com/Edson4lawson
              </a>
              <div class="flex items-center gap-2">
                <Icon icon="lucide:map-pin" class="w-4 h-4 text-[#E8481C]" />
                Cotonou, Bénin
              </div>
            </div>
          </div>
        </header>

        <!-- ================= PROFIL ================= -->
        <section class="cv-section mb-10">
          <h2
            class="text-xl font-bold uppercase tracking-wider mb-4 border-l-4 border-[#E8481C] pl-3 text-[var(--cv-title)]">
            Profil Professionnel
          </h2>
          <p class="text-base leading-relaxed text-[var(--cv-muted)]">
            Développeur web full-stack avec <strong>plusieurs années d'expérience</strong> dans la conception
            d'applications de production avec Laravel, Vue 3, Python et MySQL. Approche orientée architecture logicielle
            propre (Clean Architecture), conception d'API REST, sécurité (JWT, WebAuthn, OWASP) et expérience
            utilisateur. Ingénieur IA certifié spécialiste MCP — a conçu et déployé des agents IA autonomes intégrés
            dans des produits réels. Expérimenté avec Docker, Kubernetes, pipelines CI/CD et Git Flow.
          </p>
        </section>

        <!-- ================= COMPÉTENCES ================= -->
        <section class="cv-section mb-10">
          <h2
            class="text-xl font-bold uppercase tracking-wider mb-6 border-l-4 border-[#E8481C] pl-3 text-[var(--cv-title)]">
            Compétences Techniques
          </h2>
          <div class="skills-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(comp, index) in competencies" :key="index"
              class="skill-card bg-[var(--cv-card)] border border-[var(--cv-border)] p-5 rounded-2xl transition-all duration-300">
              <h3 class="font-bold text-sm uppercase tracking-wider text-[#E8481C] mb-3 flex items-center gap-2">
                <Icon icon="lucide:check-circle" class="w-4 h-4" />
                {{ comp.category }}
              </h3>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="(item, itemIdx) in comp.items" :key="itemIdx"
                  class="text-xs px-2.5 py-1 rounded-md bg-[var(--cv-badge-bg)] text-[var(--cv-muted)] border border-[var(--cv-border)]">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- ================= CERTIFICATIONS ================= -->
        <section class="cv-section mb-10">
          <h2
            class="text-xl font-bold uppercase tracking-wider mb-6 border-l-4 border-[#D4A017] pl-3 text-[var(--cv-title)]">
            Certifications
          </h2>
          <div class="certs-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="(cert, index) in certifications" :key="index"
              class="cert-card bg-[var(--cv-card)] border border-[var(--cv-border)] p-4 rounded-xl flex items-start gap-3 hover:border-[#D4A017] transition-all duration-300">
              <div class="p-2 rounded-lg bg-[#D4A017]/10 text-[#D4A017]">
                <Icon :icon="cert.icon" class="w-5 h-5" />
              </div>
              <div>
                <h3 class="font-bold text-xs text-[var(--cv-muted)] uppercase tracking-wider mb-1">
                  {{ cert.organization }}
                </h3>
                <p class="text-sm font-medium text-[var(--cv-text)] leading-snug">
                  {{ cert.title }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- ================= PROJETS SÉLECTIONNÉS ================= -->
        <section class="cv-section mb-10">
          <h2
            class="text-xl font-bold uppercase tracking-wider mb-6 border-l-4 border-[#E8481C] pl-3 text-[var(--cv-title)]">
            Projets Sélectionnés
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <router-link v-for="(proj, index) in selectedProjects" :key="index" :to="'/' + proj.hash"
              class="interactive p-5 rounded-2xl bg-[var(--cv-card)] border border-[var(--cv-border)] hover:border-[#E8481C] transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="flex justify-between items-center mb-2">
                  <h3 class="font-bold text-lg text-[var(--cv-text)] group-hover:text-[#E8481C] transition-colors">
                    {{ proj.name }}
                  </h3>
                  <span class="text-xs font-mono px-2 py-0.5 rounded bg-[#E8481C]/10 text-[#E8481C]">
                    {{ proj.date }}
                  </span>
                </div>
                <span class="text-xs text-[var(--cv-muted)] font-semibold uppercase tracking-wider block mb-2">
                  {{ proj.role }}
                </span>
                <p class="text-sm text-[var(--cv-muted)] leading-relaxed">
                  {{ proj.desc }}
                </p>
              </div>
              <div class="text-xs text-[#E8481C] font-bold mt-4 flex items-center gap-1">
                En savoir plus
                <Icon icon="lucide:arrow-right"
                  class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </router-link>
          </div>
        </section>

        <!-- ================= LANGUES & INTERETS ================= -->
        <section class="cv-section grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[var(--cv-border)]">
          <!-- Langues -->
          <div>
            <h2 class="text-lg font-bold uppercase tracking-wider mb-4 text-[var(--cv-title)]">
              Langues
            </h2>
            <ul class="space-y-2 text-sm text-[var(--cv-muted)]">
              <li class="flex justify-between items-center py-1.5 border-b border-[var(--cv-border)] border-dashed">
                <span>Français</span>
                <span
                  class="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[var(--cv-badge-bg)] text-[#E8481C]">C1
                  — Courant</span>
              </li>
              <li class="flex justify-between items-center py-1.5 border-b border-[var(--cv-border)] border-dashed">
                <span>Anglais</span>
                <span
                  class="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[var(--cv-badge-bg)] text-[#D4A017]">B1
                  — Intermédiaire</span>
              </li>
            </ul>
          </div>

          <!-- Centres d'intérêt -->
          <div>
            <h2 class="text-lg font-bold uppercase tracking-wider mb-4 text-[var(--cv-title)]">
              Centres d'intérêt
            </h2>
            <div class="flex flex-wrap gap-2">
              <span
                class="text-sm px-3.5 py-1.5 rounded-xl bg-[var(--cv-card)] border border-[var(--cv-border)] text-[var(--cv-muted)] flex items-center gap-2">
                <Icon icon="lucide:music" class="w-4 h-4 text-[#E8481C]" />
                Musique
              </span>
              <span
                class="text-sm px-3.5 py-1.5 rounded-xl bg-[var(--cv-card)] border border-[var(--cv-border)] text-[var(--cv-muted)] flex items-center gap-2">
                <Icon icon="lucide:gamepad-2" class="w-4 h-4 text-[#D4A017]" />
                Jeux vidéo
              </span>
              <span
                class="text-sm px-3.5 py-1.5 rounded-xl bg-[var(--cv-card)] border border-[var(--cv-border)] text-[var(--cv-muted)] flex items-center gap-2">
                <Icon icon="lucide:book-open" class="w-4 h-4 text-[#E8481C]" />
                Lecture
              </span>
              <span
                class="text-sm px-3.5 py-1.5 rounded-xl bg-[var(--cv-card)] border border-[var(--cv-border)] text-[var(--cv-muted)] flex items-center gap-2">
                <Icon icon="lucide:dribbble" class="w-4 h-4 text-[#D4A017]" />
                Basket-ball
              </span>
              <span
                class="text-sm px-3.5 py-1.5 rounded-xl bg-[var(--cv-card)] border border-[var(--cv-border)] text-[var(--cv-muted)] flex items-center gap-2">
                <Icon icon="lucide:plane" class="w-4 h-4 text-[#E8481C]" />
                Voyages
              </span>
            </div>
          </div>
        </section>

      </article>

      <!-- ================= ACTION BUTTONS ================= -->
      <footer class="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
        <!-- Download Button -->
        <a href="/documents/CV-Edson-Lawson.pdf" download="CV-Edson-Lawson.pdf"
          class="interactive inline-flex items-center gap-3 px-8 py-4 rounded-xl font-extrabold text-white bg-[#E8481C] hover:bg-[#c93d14] transition-all duration-300 shadow-lg hover:shadow-[#E8481C]/20 border border-[#E8481C] transform hover:scale-105 active:scale-95"
          aria-label="Télécharger le CV au format PDF">
          <Icon icon="lucide:download" class="w-5 h-5" />
          Télécharger le CV
        </a>

        <!-- View PDF Button -->
        <a href="/documents/CV-Edson-Lawson.pdf" target="_blank" rel="noopener noreferrer"
          class="interactive inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold border border-[var(--cv-border)] bg-[var(--cv-card)] hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-300 transform hover:scale-105 active:scale-95"
          aria-label="Voir le CV au format PDF dans un nouvel onglet">
          <Icon icon="lucide:file-text" class="w-5 h-5" />
          Voir en PDF
        </a>
      </footer>

    </div>
  </div>
</template>

<style scoped>
/* CV variables are now defined globally in style.css — no override needed here */
.cv-paper {
  transition: background-color 0.5s ease, border-color 0.5s ease, color 0.5s ease;
}
</style>
