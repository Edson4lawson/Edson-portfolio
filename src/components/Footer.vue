<template>
  <footer class="py-16 border-t transition-colors duration-500"
    :style="{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }">
    <div class="max-w-screen-xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        <!-- About / Profile Column -->
        <div class="flex flex-col items-start">
          <h3 class="text-2xl font-extrabold mb-4">
            Edson <span class="text-[#E8481C]">Lawson</span>
          </h3>

          <!-- MiWa Mention -->
          <div
            class="mb-4 text-xs font-mono font-semibold py-1 px-3.5 rounded-full bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20 select-none">
            Fondateur de MiWa
          </div>

          <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-6 max-w-sm">
            Ingénieur IA Agentique & Développeur Web Full-Stack spécialisé en Clean Architecture et sécurité
            applicative.
          </p>

          <!-- Social Icons (with scale micro-interaction) -->
          <nav aria-label="Social media links">
            <ul class="flex space-x-3">
              <li v-for="(item, index) in sociallinks" :key="index">
                <a :href="item.href" target="_blank" rel="noopener noreferrer"
                  class="social-footer-icon interactive w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-color)] flex items-center justify-center transition-all duration-300 text-[var(--text-muted)] hover:text-white hover:bg-[#E8481C] hover:border-[#E8481C] transform hover:scale-110"
                  :aria-label="item.label">
                  <Icon :icon="item.icon" class="text-lg" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Quick Links Column -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-[var(--text-color)] border-l-3 border-[#E8481C] pl-2.5">
            Liens rapides
          </h3>
          <nav aria-label="Footer navigation">
            <ul class="space-y-2.5 text-sm text-[var(--text-muted)]">
              <li v-for="(link, index) in navLinks" :key="index">
                <a :href="link.href"
                  class="interactive link-hover hover:text-[#E8481C] transition-colors duration-200">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Contact Column -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-[var(--text-color)] border-l-3 border-[#E8481C] pl-2.5">
            Coordonnées
          </h3>
          <address class="not-italic space-y-3.5 text-sm text-[var(--text-muted)]">
            <div class="flex items-start gap-3">
              <Icon icon="lucide:mail" class="text-[#E8481C] text-lg mt-0.5" />
              <a href="mailto:Edson4lawson@gmail.com"
                class="interactive link-hover hover:text-[#E8481C] transition-colors">
                Edson4lawson@gmail.com
              </a>
            </div>
            <div class="flex items-start gap-3">
              <Icon icon="lucide:phone" class="text-[#E8481C] text-lg mt-0.5" />
              <a href="tel:+2290154047392" class="interactive link-hover hover:text-[#E8481C] transition-colors">
                +229 01540 47392
              </a>
            </div>
            <div class="flex items-start gap-3">
              <Icon icon="lucide:map-pin" class="text-[#E8481C] text-lg mt-0.5" />
              <span>Cotonou, Bénin</span>
            </div>
          </address>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div
        class="border-t border-[var(--border-color)] pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--text-muted)]">
        <p class="text-center sm:text-left">
          &copy; {{ currentYear }} <span class="font-semibold text-[var(--text-color)]">Edson Lawson</span>. Tous droits
          réservés.
        </p>
        <div class="flex gap-6">
          <span class="hover:text-[#E8481C] cursor-pointer">Cotonou</span>
          <span class="hover:text-[#E8481C] cursor-pointer">Bénin</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import gsap from "gsap";

const currentYear = computed(() => new Date().getFullYear());

const navLinks = ref([
  { label: "Accueil", href: "/#home" },
  { label: "À propos", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Compétences", href: "/#skills" },
  { label: "Projets", href: "/#projects" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/#contact" },
]);

const sociallinks = ref([
  {
    icon: "fa-brands:linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/edson-lawson-6b067336a/",
  },
  {
    icon: "fa-brands:github",
    label: "GitHub",
    href: "https://github.com/Edson4awson",
  },
  {
    icon: "fa-brands:facebook-f",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61573616845550",
  },
  {
    icon: "fa-brands:whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/2290154047392",
  },
]);

// Apply magnetic micro-interactions to footer social links on mount
onMounted(() => {
  const icons = document.querySelectorAll(".social-footer-icon");
  icons.forEach((icon) => {
    icon.addEventListener("mousemove", (e) => {
      const rect = icon.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(icon, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    icon.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    });
  });
});
</script>
