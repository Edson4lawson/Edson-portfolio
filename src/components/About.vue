<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 75%",
      toggleActions: "play none none none"
    }
  });

  tl.fromTo(".about-title",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
  );

  tl.fromTo(".about-subtitle",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
    "-=0.4"
  );

  tl.fromTo(".about-paragraph",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    "-=0.4"
  );

  tl.fromTo(".about-keypoint",
    { opacity: 0, scale: 0.9, y: 15 },
    { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" },
    "-=0.4"
  );

  tl.fromTo(".about-cta",
    { opacity: 0, scale: 0.95 },
    { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" },
    "-=0.3"
  );

  gsap.fromTo(".about-image-container",
    { opacity: 0, scale: 0.95, rotate: -2 },
    {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        toggleActions: "play none none none"
      }
    }
  );
});
</script>

<template>
  <section id="about" class="relative overflow-hidden py-20 md:py-32 border-b transition-colors duration-500"
    :style="{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', borderColor: 'var(--border-color)' }">
    <article class="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

      <!-- Graphic/Portrait container -->
      <div class="w-full lg:w-1/2 flex justify-center relative about-image-container opacity-0">
        <div
          class="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--border-color)]">
          <img src="../assets/apropos.jpg" alt="Edson Lawson"
            class="w-full h-auto  object-cover hover:scale-105 transition-transform duration-700" width="400"
            height="900" loading="lazy" />
        </div>
      </div>

      <!-- Text content -->
      <div class="w-full lg:w-1/2 text-left">
        <h2 class="about-title text-4xl md:text-5xl font-extrabold mb-4 opacity-0">
          À <span class="text-[#E8481C]">propos</span>
        </h2>
        <h4 class="about-subtitle text-xl md:text-2xl font-bold pb-4 text-[#D4A017] opacity-0">
          Développeur Full-Stack & Spécialiste IA
        </h4>

        <p class="about-paragraph text-base md:text-lg mb-8 leading-relaxed text-[var(--text-muted)] opacity-0">
          De plus de 2 ans d'expérience, je combine la rigueur de la <strong>Clean
            Architecture</strong> et des normes de sécurité web strictes avec le potentiel de l'intelligence
          artificielle pour donner vie à des solutions numériques d'exception.
        </p>

        <!-- Keypoints List -->
        <ul class="space-y-3 mb-10">
          <li class="about-keypoint flex items-start gap-3 opacity-0">
            <span class="p-1 rounded bg-[#E8481C]/10 text-[#E8481C] mt-1">✓</span>
            <span class="text-sm md:text-base text-[var(--text-color)]"><strong>Backend & Frontend :</strong> Expertise
              Laravel, Vue 3, Python et bases de données MySQL optimisées.</span>
          </li>
          <li class="about-keypoint flex items-start gap-3 opacity-0">
            <span class="p-1 rounded bg-[#E8481C]/10 text-[#E8481C] mt-1">✓</span>
            <span class="text-sm md:text-base text-[var(--text-color)]"><strong>Sécurité Web & DevOps :</strong>
              Implémentation OWASP Top 10, JWT, WebAuthn et orchestration avec Docker/Kubernetes.</span>
          </li>
          <li class="about-keypoint flex items-start gap-3 opacity-0">
            <span class="p-1 rounded bg-[#E8481C]/10 text-[#E8481C] mt-1">✓</span>
            <span class="text-sm md:text-base text-[var(--text-color)]"><strong>Ingénieur IA certifié MCP :</strong>
              Conception d'agents IA autonomes connectés à des produits applicatifs réels.</span>
          </li>
          <li class="about-keypoint flex items-start gap-3 opacity-0">
            <span class="p-1 rounded bg-[#D4A017]/10 text-[#D4A017] mt-1">✓</span>
            <span class="text-sm md:text-base text-[var(--text-color)]"><strong>Aventure Entrepreneuriale :</strong>
              Fondateur de <span class="text-[#D4A017] font-semibold">MiWa</span>, valorisant le patrimoine et le
              tourisme béninois.</span>
          </li>
        </ul>

        <div class="about-cta opacity-0 flex flex-wrap gap-4">
          <a href="#contact"
            class="interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#E8481C] hover:bg-[#c93d14] transition-all duration-300 shadow-md">
            Discuter d'un projet
          </a>
          <router-link to="/cv"
            class="interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-300">
            Consulter mon CV
          </router-link>
        </div>
      </div>

    </article>
  </section>
</template>
