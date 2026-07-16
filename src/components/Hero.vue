<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { Icon } from "@iconify/vue";
import { useRoute, useRouter } from "vue-router";
import { toggleTheme, isLightThemeActive } from "../utils/theme";
import gsap from "gsap";

const route = useRoute();
const router = useRouter();

const navLinks = ref([
  { label: "Accueil", href: "/#home", sectionId: "home" },
  { label: "À propos", href: "/#about", sectionId: "about" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Compétences", href: "/#skills", sectionId: "skills" },
  { label: "Projets", href: "/#projects", sectionId: "projects" },
  { label: "CV", href: "/cv", sectionId: null },
]);

const isMenuOpen = ref(false);
const activeSection = ref("home");
const isLightMode = ref(false);
const isHidden = ref(false);
const hoveredIndex = ref(null);

let lastScrollY = 0;
let menuTimeline = null;

// ── Smooth scroll navigation ──────────────────────────
const navigateTo = async (link, e) => {
  if (e) e.preventDefault();

  // If it's the CV page link, use router navigation (triggers slide transition)
  if (link.href === "/cv") {
    if (route.path !== "/cv") {
      router.push("/cv");
    }
    return;
  }

  // If link goes to a hash section
  if (link.sectionId) {
    // If we're on CV or any other page, navigate to home first
    if (route.path !== "/") {
      await router.push("/");
      await nextTick();
    }

    // Try to get the target element (with polling to support transition completion and mounting)
    let target = document.getElementById(link.sectionId);
    if (!target) {
      for (let i = 0; i < 20; i++) {
        await new Promise((r) => setTimeout(r, 50));
        target = document.getElementById(link.sectionId);
        if (target) break;
      }
    }

    if (!target) return;

    // Use Lenis if available, else native smooth scroll
    const lenisInstance = window.__lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(target, { offset: -80, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

const handleScroll = () => {
  if (route.path === "/") {
    const sections = navLinks.value
      .filter((l) => l.sectionId)
      .map((link) => link.sectionId);
    const scrollPosition = window.scrollY + 140;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          activeSection.value = sectionId;
          break;
        }
      }
    }
  }

  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 80 && !isMenuOpen.value) {
    isHidden.value = true;
  } else {
    isHidden.value = false;
  }
  lastScrollY = currentScrollY;
};

const handleThemeToggle = () => {
  isLightMode.value = toggleTheme();
};

const onThemeChange = (e) => {
  isLightMode.value = e.detail.isLight;
};

const isLinkActive = (link) => {
  if (link.href === "/cv") return route.path === "/cv";
  return route.path === "/" && activeSection.value === link.sectionId;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (!menuTimeline) setupMenuTimeline();
  isMenuOpen.value ? menuTimeline.play() : menuTimeline.reverse();
};

const setupMenuTimeline = () => {
  menuTimeline = gsap.timeline({ paused: true });

  menuTimeline.to(".burger-line-1", {
    x: -30, opacity: 0, duration: 0.3, ease: "power2.inOut"
  }, 0);
  menuTimeline.to(".burger-line-2", {
    x: 30, opacity: 0, duration: 0.3, ease: "power2.inOut"
  }, 0);
  menuTimeline.fromTo(".burger-text",
    { x: -10, opacity: 0, scale: 0.8 },
    { x: 0, opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
    0.15
  );
  menuTimeline.fromTo(".mobile-overlay",
    { opacity: 0, pointerEvents: "none" },
    { opacity: 1, pointerEvents: "auto", duration: 0.4, ease: "power2.out" },
    0
  );
  menuTimeline.fromTo(".mobile-nav-link",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out" },
    0.2
  );
};

const closeMenu = async (link, e) => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    if (menuTimeline) menuTimeline.reverse();
  }
  if (link) await navigateTo(link, e);
};

onMounted(() => {
  isLightMode.value = isLightThemeActive();
  window.addEventListener("theme-changed", onThemeChange);
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
  nextTick(() => {
    setupMenuTimeline();
  });
});

onUnmounted(() => {
  window.removeEventListener("theme-changed", onThemeChange);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 h-16 z-50 flex items-center transition-all duration-300 border-b"
    :class="[
      isHidden ? '-translate-y-full' : 'translate-y-0',
      isLightMode
        ? 'bg-[#F5F1E8]/70 border-gray-200/50 text-[#0E0E0E]'
        : 'bg-[#0E0E0E]/70 border-gray-800/50 text-white',
      'backdrop-blur-md'
    ]"
  >
    <div class="max-w-screen-xl mx-auto px-6 flex justify-between items-center w-full">

      <!-- Left Logo -->
      <a
        href="/#home"
        @click="navigateTo({ href: '/#home', sectionId: 'home' }, $event)"
        class="flex items-center focus:outline-none rounded transition-transform duration-300 active:scale-95"
      >
        <span class="text-xl font-extrabold tracking-wider">
          Edson <span :class="isLightMode ? 'text-[#C23510]' : 'text-[#E8481C]'">Lawson</span>
        </span>
      </a>

      <!-- Desktop Center Navigation -->
      <nav class="hidden md:flex items-center space-x-1" aria-label="Primary Navigation">
        <a
          v-for="(link, index) in navLinks"
          :key="index"
          :href="link.href"
          @click="navigateTo(link, $event)"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
          class="nav-link relative px-3 py-1.5 text-sm font-medium focus:outline-none group"
          :class="[
            isLinkActive(link)
              ? (isLightMode ? 'text-[#C23510]' : 'text-[#E8481C]')
              : (isLightMode ? 'text-gray-700' : 'text-gray-300')
          ]"
        >
          <!-- Label text -->
          <span class="relative z-10 transition-colors duration-200 group-hover:text-[#E8481C]">
            {{ link.label }}
          </span>

          <!-- Animated underline — scales from center on hover -->
          <span
            class="absolute bottom-0 left-0 right-0 mx-auto h-[2px] rounded-full bg-[#E8481C] origin-center transition-all duration-300 ease-out"
            :class="[
              isLinkActive(link)
                ? 'w-full opacity-100'
                : (hoveredIndex === index ? 'w-full opacity-80' : 'w-0 opacity-0')
            ]"
          ></span>

          <!-- Active dot indicator -->
          <span
            v-if="isLinkActive(link)"
            class="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E8481C] animate-pulse"
          ></span>
        </a>
      </nav>

      <!-- Desktop Right Controls -->
      <div class="hidden md:flex items-center gap-4">
        <!-- Theme Toggle -->
        <button
          @click="handleThemeToggle"
          class="interactive w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 bg-transparent"
          :class="[
            isLightMode
              ? 'border-gray-300 text-gray-700 hover:border-[#C23510] hover:text-[#C23510]'
              : 'border-gray-800 text-gray-300 hover:border-[#E8481C] hover:text-[#E8481C]'
          ]"
          aria-label="Changer de thème"
        >
          <Icon :icon="isLightMode ? 'lucide:sun' : 'lucide:moon'" class="w-4 h-4" />
        </button>

        <!-- CTA button -->
        <a
          href="/#contact"
          @click="navigateTo({ href: '/#contact', sectionId: 'contact' }, $event)"
          class="interactive inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all duration-300 transform active:scale-95 shadow-md border"
          :class="[
            isLightMode
              ? 'bg-[#C23510] border-[#C23510] hover:bg-transparent hover:text-[#C23510]'
              : 'bg-[#E8481C] border-[#E8481C] hover:bg-transparent hover:text-[#E8481C]'
          ]"
        >
          Me contacter
          <Icon icon="lucide:message-square" class="w-4 h-4" />
        </a>
      </div>

      <!-- Mobile Right Controls -->
      <div class="flex items-center gap-4 md:hidden">
        <button
          @click="handleThemeToggle"
          class="interactive w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 bg-transparent"
          :class="[isLightMode ? 'border-gray-300 text-gray-700' : 'border-gray-800 text-gray-300']"
          aria-label="Changer de thème"
        >
          <Icon :icon="isLightMode ? 'lucide:sun' : 'lucide:moon'" class="w-4 h-4" />
        </button>

        <!-- Burger Button -->
        <button
          @click="toggleMenu"
          class="relative w-12 h-9 flex items-center justify-center focus:outline-none select-none z-50 interactive"
          aria-label="Menu"
          :aria-expanded="isMenuOpen.toString()"
        >
          <div
            class="burger-line burger-line-1 absolute top-3.5 h-[2px] rounded-full transition-colors duration-300"
            :style="{ width: '24px', left: '12px', backgroundColor: isLightMode ? '#C23510' : '#E8481C' }"
          ></div>
          <div
            class="burger-line burger-line-2 absolute top-[21px] h-[2px] rounded-full transition-colors duration-300"
            :style="{ width: '16px', left: '16px', backgroundColor: isLightMode ? '#C23510' : '#E8481C' }"
          ></div>
          <span
            class="burger-text absolute font-mono text-[10px] font-extrabold uppercase tracking-widest opacity-0 select-none"
            :class="isLightMode ? 'text-[#C23510]' : 'text-[#E8481C]'"
          >
            Fermer
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Fullscreen Overlay -->
    <div
      class="mobile-overlay fixed inset-0 w-screen h-screen z-40 opacity-0 pointer-events-none flex flex-col justify-center items-center backdrop-blur-lg"
      :class="[isLightMode ? 'bg-[#F5F1E8]/95 text-[#0E0E0E]' : 'bg-[#0E0E0E]/95 text-white']"
    >
      <nav class="flex flex-col items-center space-y-6 text-center">
        <a
          v-for="(link, index) in navLinks"
          :key="index"
          :href="link.href"
          @click="closeMenu(link, $event)"
          class="mobile-nav-link text-2xl font-bold tracking-wide interactive py-2 px-6 rounded-xl hover:scale-105 transition-transform duration-300"
          :class="[isLinkActive(link) ? (isLightMode ? 'text-[#C23510]' : 'text-[#E8481C]') : '']"
        >
          {{ link.label }}
        </a>

        <a
          href="/#contact"
          @click="closeMenu({ href: '/#contact', sectionId: 'contact' }, $event)"
          class="mobile-nav-link interactive inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white transition-all duration-300 shadow-md border"
          :class="[isLightMode ? 'bg-[#C23510] border-[#C23510]' : 'bg-[#E8481C] border-[#E8481C]']"
        >
          Me contacter
          <Icon icon="lucide:message-square" class="w-5 h-5" />
        </a>
      </nav>
    </div>

  </header>
</template>

<style scoped>
.nav-link {
  overflow: visible;
}

/* The underline span uses width transitions — ensure no clipping */
.nav-link span:not(.animate-pulse) {
  display: block;
}
</style>
