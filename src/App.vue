<template>
  <div>
    <Hero />
    <router-view v-slot="{ Component, route }">
      <Transition :name="transitionName" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </router-view>
    <Footer v-if="showFooter" />
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import Hero from './components/Hero.vue';
import Footer from './components/Footer.vue';
import AOS from "aos";
import "aos/dist/aos.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import 'lenis/dist/lenis.css';

import { initTheme } from "./utils/theme";

gsap.registerPlugin(ScrollTrigger);

// Route order for determining slide direction
const routeOrder = { '/': 0, '/projects': 1, '/cv': 2 };
const transitionName = ref('slide-left');
const route = useRoute();
let prevPath = route.path;

// Hide footer on subpages that have their own layout
const showFooter = computed(() => ![ '/cv', '/projects', '/under-construction' ].includes(route.path));

watch(() => route.path, (newPath) => {
  const prevOrder = routeOrder[prevPath] ?? 0;
  const newOrder = routeOrder[newPath] ?? 0;
  transitionName.value = newOrder > prevOrder ? 'slide-left' : 'slide-right';
  prevPath = newPath;
});

onMounted(() => {
  initTheme();
  AOS.init();

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
  });

  // Expose globally so Hero.vue nav can use smooth scroll
  window.__lenis = lenis;

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
});
</script>

<style>
/* ── Page Slide Transitions ── */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Slide LEFT (going forward: / → /cv) */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(48px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-48px);
}

/* Slide RIGHT (going back: /cv → /) */
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-48px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(48px);
}
</style>
