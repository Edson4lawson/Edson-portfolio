<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import gsap from "gsap";

import { isLightThemeActive } from "./utils/theme";

const isDark = ref(true);

const onThemeChange = (e) => {
  isDark.value = !e.detail.isLight;
};

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

// Canvas Background Refs
const canvasRef = ref(null);
let animationFrameId = null;

// Cursor Refs
const cursorDot = ref(null);
const cursorRing = ref(null);

// Magnetic CTAs
const ctaPrimary = ref(null);
const ctaSecondary = ref(null);

// Text Splitting Helper for GSAP cascade
const nameText = "Edson Lawson";
const nameLetters = nameText.split("");

onMounted(() => {
  isDark.value = !isLightThemeActive();
  window.addEventListener('theme-changed', onThemeChange);
  const onMouseMove = (e) => {
    gsap.to(cursorDot.value, {
      x: e.clientX,
      y: e.clientY,
      xPercent: -50,
      yPercent: -50,
      duration: 0.05,
      ease: "power2.out",
    });
    gsap.to(cursorRing.value, {
      x: e.clientX,
      y: e.clientY,
      xPercent: -50,
      yPercent: -50,
      duration: 0.15,
      ease: "power2.out",
    });
  };

  const onMouseEnterInteractive = () => {
    gsap.to(cursorRing.value, {
      scale: 1.8,
      borderColor: isDark.value ? "#E8481C" : "#D4A017",
      backgroundColor: isDark.value ? "rgba(232, 72, 28, 0.1)" : "rgba(212, 160, 23, 0.1)",
      duration: 0.2,
    });
    gsap.to(cursorDot.value, {
      scale: 0.5,
      backgroundColor: isDark.value ? "#E8481C" : "#D4A017",
      duration: 0.2,
    });
  };

  const onMouseLeaveInteractive = () => {
    gsap.to(cursorRing.value, {
      scale: 1,
      borderColor: isDark.value ? "#E8481C" : "#D4A017",
      backgroundColor: "transparent",
      duration: 0.2,
    });
    gsap.to(cursorDot.value, {
      scale: 1,
      backgroundColor: isDark.value ? "#E8481C" : "#D4A017",
      duration: 0.2,
    });
  };

  window.addEventListener("mousemove", onMouseMove);

  // Bind custom cursor listeners to interactive elements
  const addCursorListeners = () => {
    const interactives = document.querySelectorAll(".interactive");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });
  };

  setTimeout(addCursorListeners, 500); // Wait for DOM mounting

  // --- 2. Canvas Particles Background ---
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = 60;

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? "#E8481C" : "#D4A017";
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  const animateParticles = () => {
    ctx.clearRect(0, 0, width, height);

    // Subtle gradient base
    const grad = ctx.createRadialGradient(
      width / 2,
      height / 2,
      10,
      width / 2,
      height / 2,
      Math.max(width, height)
    );
    if (isDark.value) {
      grad.addColorStop(0, "#161616");
      grad.addColorStop(1, "#0E0E0E");
    } else {
      grad.addColorStop(0, "#FCFAF2");
      grad.addColorStop(1, "#F5F1E8");
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Draw lines & update particles
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      p1.update();
      p1.draw();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = isDark.value
            ? `rgba(220, 220, 220, ${0.12 * (1 - dist / 120)})`
            : `rgba(40, 40, 40, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animateParticles);
  };

  animateParticles();

  const handleResize = () => {
    if (canvas) {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
  };
  window.addEventListener("resize", handleResize);

  // --- 3. GSAP Entry Timelines ---
  const tl = gsap.timeline();

  // Reveal Welcome Text
  tl.fromTo(
    ".welcome-text",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
  );

  // Cascade animate name characters
  tl.fromTo(
    ".char-node",
    { opacity: 0, scale: 0.3, y: 40, rotateX: -60 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      duration: 0.6,
      stagger: 0.04,
      ease: "back.out(1.7)",
    },
    "-=0.5"
  );

  // Reveal Positioning titles
  tl.fromTo(
    ".role-box",
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
    "-=0.3"
  );

  // Reveal description paragraph
  tl.fromTo(
    ".hero-desc",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    "-=0.2"
  );

  // Reveal CTA Buttons & Social links
  tl.fromTo(
    ".hero-cta, .social-icon",
    { opacity: 0, scale: 0.8, y: 20 },
    { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
    "-=0.4"
  );

  // --- 4. Magnetic CTA Effect ---
  const setupMagnetic = (buttonRef) => {
    if (!buttonRef) return;
    const button = buttonRef;

    const onButtonMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onButtonMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    button.addEventListener("mousemove", onButtonMouseMove);
    button.addEventListener("mouseleave", onButtonMouseLeave);

    onUnmounted(() => {
      button.removeEventListener("mousemove", onButtonMouseMove);
      button.removeEventListener("mouseleave", onButtonMouseLeave);
    });
  };

  setupMagnetic(ctaPrimary.value);
  setupMagnetic(ctaSecondary.value);

  // Cleanup on unmount
  onUnmounted(() => {
    window.removeEventListener('theme-changed', onThemeChange);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", handleResize);
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });
});
</script>

<template>
  <div :class="[
    'relative min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-500',
    isDark ? 'bg-[#0E0E0E] text-white' : 'bg-[#F5F1E8] text-[#1E1E1E]'
  ]" id="home">
    <!-- Background Canvas -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-none z-0"></canvas>

    <!-- Custom Cursor -->
    <div ref="cursorDot" class="hidden md:block fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50"
      :style="{ backgroundColor: isDark ? '#E8481C' : '#D4A017' }"></div>
    <div ref="cursorRing"
      class="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-50 transition-colors duration-300"
      :style="{ borderColor: isDark ? '#E8481C' : '#D4A017' }"></div>



    <!-- Hero Content Container -->
    <div
      class="relative max-w-6xl mx-auto px-6 py-20 z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
      <!-- Left Info Content -->
      <div class="flex-1 text-left">
        <h3 class="welcome-text font-mono text-sm tracking-wider uppercase mb-3 opacity-0"
          :class="isDark ? 'text-gray-400' : 'text-gray-600'">
          Découvrez mon univers
        </h3>

        <!-- Cascading Name -->
        <h1 class="font-extrabold tracking-tight mb-6 perspective-1000 whitespace-nowrap"
          style="font-size: clamp(2rem, 8vw, 5rem);">
          <span v-for="(char, index) in nameLetters" :key="index"
            class="char-node inline-block transform origin-bottom-left" :class="char === ' ' ? 'w-[0.3em]' : ''">
            {{ char }}
          </span>
        </h1>

        <!-- Double Positioning block -->
        <div class="flex flex-wrap gap-4 mb-8">
          <!-- Développeur Full-Stack badge -->
          <div class="role-box flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md opacity-0" :class="[
            isDark
              ? 'border-[#E8481C] bg-[#E8481C]/10 text-[#E8481C]'
              : 'border-[#C23510] bg-[#E8481C]/10 text-[#C23510]'
          ]">
            <Icon icon="lucide:code-2" class="w-5 h-5" />
            <span class="font-semibold text-sm">Développeur Full-Stack</span>
          </div>

          <!-- Fondateur de MiWa badge -->
          <div class="role-box flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md opacity-0" :class="[
            isDark
              ? 'border-[#D4A017] bg-[#D4A017]/10 text-[#D4A017]'
              : 'border-[#8B6914] bg-[#D4A017]/10 text-[#8B6914]'
          ]">
            <Icon icon="lucide:rocket" class="w-5 h-5" />
            <span class="font-semibold text-sm">Fondateur de MiWa</span>
          </div>
        </div>

        <p class="hero-desc text-lg md:text-xl max-w-xl mb-10 leading-relaxed opacity-0"
          :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          Développeur Web & Mobile Fullstack et fondateur de
          <span class="font-bold underline" :class="isDark ? 'text-[#D4A017]' : 'text-[#B5850E]'">MiWa</span>. Je donne
          vie aux idées en alliant design soigné, performance et technologies innovantes, du produit client à ma propre
          vision entrepreneuriale
        </p>

        <!-- CTA Actions -->
        <div class="flex flex-wrap gap-4 items-center mb-10">
          <a ref="ctaPrimary" href="#projects"
            class="hero-cta interactive inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white shadow-lg transition-all duration-300 border"
            :class="[
              isDark
                ? 'bg-[#E8481C] border-[#E8481C] hover:bg-transparent hover:text-[#E8481C]'
                : 'bg-[#C23510] border-[#C23510] hover:bg-transparent hover:text-[#C23510]'
            ]">
            Voir mes projets
            <Icon icon="lucide:arrow-right" class="w-5 h-5" />
          </a>

          <a ref="ctaSecondary" href="#contact"
            class="hero-cta interactive inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-300 border bg-transparent"
            :class="[
              isDark
                ? 'border-gray-700 text-white hover:border-[#D4A017] hover:text-[#D4A017]'
                : 'border-gray-400 text-gray-800 hover:border-[#B5850E] hover:text-[#B5850E]'
            ]">
            Me contacter
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex items-center gap-4">
          <a v-for="(item, index) in sociallinks" :key="index" :href="item.href" target="_blank"
            rel="noopener noreferrer"
            class="social-icon interactive w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 bg-opacity-5 backdrop-blur-sm"
            :class="[
              isDark
                ? 'border-gray-800 text-gray-400 hover:border-[#E8481C] hover:text-[#E8481C]'
                : 'border-gray-300 text-gray-600 hover:border-[#C23510] hover:text-[#C23510]'
            ]" :aria-label="item.label">
            <Icon :icon="item.icon" class="text-lg" />
          </a>
        </div>
      </div>

      <!-- Right Graphic / Portrait Content -->
      <div class="hidden lg:flex relative w-full max-w-sm lg:max-w-md aspect-square items-center justify-center">
        <!-- Floating Accent Glows -->
        <div class="absolute w-72 h-72 rounded-full filter blur-[80px] opacity-20 animate-pulse"
          :class="isDark ? 'bg-[#E8481C]' : 'bg-[#E8481C]'" style="top: 10%; left: 10%;"></div>
        <div class="absolute w-72 h-72 rounded-full filter blur-[80px] opacity-20 animate-pulse"
          :class="isDark ? 'bg-[#D4A017]' : 'bg-[#D4A017]'" style="bottom: 10%; right: 10%; animation-delay: 2s;"></div>

        <!-- Decorative Tech Circle -->
        <div class="absolute w-full h-full rounded-full border border-dashed animate-[spin_60s_linear_infinite]"
          :class="isDark ? 'border-gray-800' : 'border-gray-300'"></div>

        <figure
          class="relative z-10 w-4/5 aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-opacity-20"
          :class="isDark ? 'border-white' : 'border-gray-800'">
          <img src="./assets/home.jpg" alt="Edson Lawson"
            class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" width="400"
            height="400" loading="eager" />
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

/* Base custom styles to support theme transitions */
.light-theme {
  --color-background: #F5F1E8;
  --color-text: #1E1E1E;
}
</style>
