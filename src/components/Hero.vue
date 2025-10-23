<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
const navLinks = ref([
  { label: "Accueil", href: "home" },
  { label: "À propos", href: "about" },
  { label: "Services", href: "services" },
  { label: "Compétences", href: "skills" },
  { label: "Projets", href: "projects" },
  { label: "Contact", href: "contact" },
]);

const isMenuOpen = ref(false);
const activeSection = ref("home");

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  const sections = navLinks.value.map((link) => link.href);
  const scrollPosition = window.scrollY + 100;

  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        activeSection.value = sectionId;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="bg-gradient-to-r from-[#0a192f] to-[#112240] sticky top-0 h-10 z-50 " id="fixe"
  >
    <div class="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
      <!-- Logo -->
      <a
        href="#"
        class="flex items-center focus:outline-none focus:ring-2 focus:ring-[#00FFFF] rounded"
      >
        <h1 class="text-2xl font-bold text-white">
          Edson <span class="text-[#00FFFF]">Lawson</span>
        </h1>
      </a>
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6" aria-label="Primary Navigation">
        <a
          v-for="(link, index) in navLinks"
          :key="index"
          :href="`#${link.href}`"
          :class="[
            'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] rounded',
            activeSection === link.href
              ? 'text-[#00FFFF] font-semibold'
              : 'text-gray-200 hover:text-[#00FFFF]',
          ]"
          >{{ link.label }}</a
        >
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] rounded"
        @click="toggleMenu"
        aria-label="Toggle menu"
        :aria-expanded="isMenuOpen.toString()"
        aria-controls="mobile-menu"
      >
        <Icon
          :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu'"
          class="w-6 h-6 text-[#00FFFF]"
        />
      </button>
    </div>

    <!-- Mobile menu -->
    <aside
      v-if="isMenuOpen"
      id="mobile-menu"
      class="md:hidden bg-[#112240] shadow-lg py-4 px-4 absolute top-full left-0 right-0 z-40"
      aria-label="Mobile menu"
    >
      <nav aria-label="Mobile Navigation">
        <ul class="flex flex-col space-y-4">
          <li v-for="(link, index) in navLinks" :key="index">
            <a
              :href="`#${link.href}`"
              :class="[
                'block transition-colors duration-200 py-2 px-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] rounded',
                activeSection === link.href
                  ? 'text-[#00FFFF] font-semibold'
                  : 'text-gray-200 hover:text-[#00FFFF]',
              ]"
              @click="toggleMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  </header>
</template>
