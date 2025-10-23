<template>
  <footer
    class="bg-gradient-to-r from-[#0a192f] to-[#112240] text-white py-12 border-t border-[#00FFFF]/20 "
  >
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- About Section -->
        <div data-aos="fade-up">
          <h3 class="text-2xl font-bold text-white mb-4">
            Edson <span class="text-[#00FFFF]">Lawson</span>
          </h3>
          <p class="text-gray-300 mb-4">
            Développeur Full Stack passionné par la création d'applications Web
            belles et fonctionnelles.
          </p>
          <nav aria-label="Social media links">
            <ul class="flex space-x-4">
              <li v-for="(item, index) in sociallinks" :key="index">
                <a
                  :href="item.href"
                  class="w-10 h-10 rounded-full flex items-center justify-center transition duration-300 bg-[#112240] hover:bg-[#00FFFF] group"
                  :aria-label="item.label"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    :icon="item.icon"
                    class="text-[#00FFFF] group-hover:text-[#0a192f] text-lg"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Liens rapides -->
        <div data-aos="fade-up" data-aos-delay="150">
          <h3 class="text-xl font-bold text-[#00FFFF] mb-4">Liens rapides</h3>
          <nav aria-label="Footer navigation">
            <ul class="space-y-2">
              <li v-for="(link, index) in navLinks" :key="index">
                <a
                  :href="`#${link.href}`"
                  class="text-gray-300 hover:text-[#00FFFF] transition duration-200 inline-block"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Coordonnées -->
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 class="text-xl font-bold text-[#00FFFF] mb-4">Coordonnées</h3>
          <address class="not-italic space-y-3">
            <div class="flex items-start gap-3">
              <Icon
                icon="mdi:email"
                class="text-[#00FFFF] text-xl mt-1 flex-shrink-0"
              />
              <a
                href="mailto:Edson4lawson@gmail.com"
                class="text-gray-300 hover:text-[#00FFFF] transition"
              >
                Edson4lawson@gmail.com
              </a>
            </div>
            <div class="flex items-start gap-3">
              <Icon
                icon="mdi:phone"
                class="text-[#00FFFF] text-xl mt-1 flex-shrink-0"
              />
              <a
                href="tel:+2290154047392"
                class="text-gray-300 hover:text-[#00FFFF] transition"
              >
                +229 01540 47392
              </a>
            </div>
            <div class="flex items-start gap-3">
              <Icon
                icon="mdi:map-marker"
                class="text-[#00FFFF] text-xl mt-1 flex-shrink-0"
              />
              <p class="text-gray-300">Cotonou-Benin</p>
            </div>
          </address>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-[#00FFFF]/20 pt-8 mt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-gray-400 text-sm text-center md:text-left">
            &copy; {{ currentYear }}
            <span class="text-[#00FFFF]">Edson Lawson</span>. Tous droits
            réservés.
          </p>
          <div class="flex gap-6 text-sm">
            <a href="#" class="text-gray-400 hover:text-[#00FFFF] transition"
              >Politique de confidentialité</a
            >
            <a href="#" class="text-gray-400 hover:text-[#00FFFF] transition"
              >Conditions d'utilisation</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";

const currentYear = computed(() => new Date().getFullYear());

const navLinks = ref([
  { label: "Accueil", href: "home" },
  { label: "À propos", href: "about" },
  { label: "Services", href: "services" },
  { label: "Compétences", href: "skills" },
  { label: "Projets", href: "projects" },
  { label: "Contact", href: "contact" },
]);

const sociallinks = ref([
  {
    icon: "fa-brands:facebook-f",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61573616845550",
  },
  {
    icon: "fa-brands:twitter",
    label: "Twitter",
    href: "https://x.com/edson4lawson?t=jIGYqNROTSTIm8voPS5v1w&s=09",
  },
  {
    icon: "fa-brands:instagram",
    label: "Instagram",
    href: "https://www.instagram.com/edson_3183?igsh=NXZuem1lbGloNDRh",
  },
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
]);
</script>
