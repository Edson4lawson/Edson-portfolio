<template>
  <section id="services" class="py-20 border-b transition-colors duration-500"
    :style="{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', borderColor: 'var(--border-color)' }">
    <div class="container mx-auto px-6 text-center">
      <!-- Section Title -->
      <div class="services-title mb-16 opacity-0">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4">
          Mes <span class="text-[#E8481C]">Services</span>
        </h2>
        <p class="max-w-xl mx-auto text-[var(--text-muted)] text-base md:text-lg">
          Des services d'ingénierie logicielle avancés alliant design d'architecture propre, automatisation intelligente
          par IA et protocoles de sécurité certifiés.
        </p>
        <div class="w-12 h-1 bg-[#E8481C] mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <!-- Service Card 1 -->
        <div
          class="service-card bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between items-start text-left shadow-lg opacity-0">
          <div>
            <div class="p-3 bg-[#E8481C]/10 text-[#E8481C] rounded-xl mb-6 inline-block">
              <Icon icon="mdi:code-tags" class="text-3xl" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-[var(--text-color)]">Développement Full-Stack</h3>
            <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
              Conception d'applications web & mobiles sur-mesure rapides et fluides sur stack technique robuste
              (Laravel, Vue 3, Python, MySQL). Respect rigoureux des principes SOLID et de la Clean Architecture pour un
              code pérenne et scalable.
            </p>
          </div>
          <!-- <a href="#contact" class="interactive text-[#E8481C] font-semibold text-sm inline-flex items-center gap-1 hover:underline">
            En savoir plus
            <Icon icon="lucide:arrow-right" class="w-4 h-4" />
          </a> -->
        </div>

        <!-- Service Card 2 -->
        <div
          class="service-card bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between items-start text-left shadow-lg opacity-0">
          <div>
            <div class="p-3 bg-[#D4A017]/10 text-[#D4A017] rounded-xl mb-6 inline-block">
              <Icon icon="lucide:bot" class="text-3xl" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-[var(--text-color)]">Ingénierie IA & Agents</h3>
            <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
              Intégration avancée de grands modèles de langage (LLM) et création d'agents IA autonomes intégrés dans des
              workflows d'entreprise réels. Expertise MCP (Model Context Protocol), orchestration via n8n et Prompt
              Engineering.
            </p>
          </div>
          <!-- <a href="#contact" class="interactive text-[#D4A017] font-semibold text-sm inline-flex items-center gap-1 hover:underline">
            En savoir plus
            <Icon icon="lucide:arrow-right" class="w-4 h-4" />
          </a> -->
        </div>

        <!-- Service Card 3 -->
        <div
          class="service-card bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between items-start text-left shadow-lg opacity-0">
          <div>
            <div class="p-3 bg-[#E8481C]/10 text-[#E8481C] rounded-xl mb-6 inline-block">
              <Icon icon="mdi:shield-lock-outline" class="text-3xl" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-[var(--text-color)]">Sécurité Web & DevOps</h3>
            <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
              Sécurisation applicative contre les vulnérabilités de l'OWASP Top 10. Authentification renforcée (JWT,
              WebAuthn sans mot de passe). Gestion de déploiements conteneurisés sécurisés avec Docker et Kubernetes et
              automatisation CI/CD.
            </p>
          </div>
          <!-- <a href="#contact" class="interactive text-[#E8481C] font-semibold text-sm inline-flex items-center gap-1 hover:underline">
            En savoir plus
            <Icon icon="lucide:arrow-right" class="w-4 h-4" />
          </a> -->
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

onMounted(() => {
  // Title reveal
  gsap.fromTo(
    ".services-title",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".services-title",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );

  // Cards stagger reveal
  gsap.fromTo(
    ".service-card",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".services-title",
        start: "top 60%",
        toggleActions: "play none none none"
      }
    }
  );
});
</script>
