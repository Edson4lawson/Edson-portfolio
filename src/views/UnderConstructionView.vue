<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import { isLightThemeActive } from "../utils/theme";

const router = useRouter();
const isDark = ref(true);

const onThemeChange = (e) => {
  isDark.value = !e.detail.isLight;
};

onMounted(() => {
  isDark.value = !isLightThemeActive();
  window.addEventListener('theme-changed', onThemeChange);
});

onUnmounted(() => {
  window.removeEventListener('theme-changed', onThemeChange);
});
</script>

<template>
  <div :class="[
    'min-h-screen flex flex-col justify-between p-6 relative overflow-hidden font-sans transition-colors duration-500',
    isDark ? 'bg-[#0E0E0E] text-white' : 'bg-[#F5F1E8] text-[#1E1E1E]'
  ]">
    <!-- Grid background decoration -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    
    <!-- Glowing background accents -->
    <div class="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#E8481C]/10 filter blur-[100px] pointer-events-none"></div>
    <div class="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#D4A017]/10 filter blur-[100px] pointer-events-none"></div>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col justify-center items-center text-center relative z-10 max-w-2xl mx-auto py-12">
      <!-- Animated Construction Graphic -->
      <div class="relative w-64 h-48 mb-8 flex justify-center items-center">
        <!-- SVG Modern Construction Scene -->
        <svg viewBox="0 0 200 150" class="w-full h-full text-gray-400">
          <!-- Ground line -->
          <line x1="10" y1="130" x2="190" y2="130" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" class="opacity-50" />
          
          <!-- Crane Tower -->
          <g class="text-[#E8481C]">
            <rect x="150" y="40" width="8" height="90" fill="none" stroke="currentColor" stroke-width="2" />
            <line x1="150" y1="50" x2="158" y2="60" stroke="currentColor" stroke-width="1.5" />
            <line x1="158" y1="60" x2="150" y2="70" stroke="currentColor" stroke-width="1.5" />
            <line x1="150" y1="70" x2="158" y2="80" stroke="currentColor" stroke-width="1.5" />
            <line x1="158" y1="80" x2="150" y2="90" stroke="currentColor" stroke-width="1.5" />
            <line x1="150" y1="90" x2="158" y2="100" stroke="currentColor" stroke-width="1.5" />
            <line x1="158" y1="100" x2="150" y2="110" stroke="currentColor" stroke-width="1.5" />
            
            <!-- Crane Boom (Arm) with rotate animation -->
            <g class="animate-crane origin-[154px_40px]">
              <line x1="70" y1="40" x2="175" y2="40" stroke="currentColor" stroke-width="2.5" />
              <!-- Counterweight -->
              <rect x="165" y="35" width="10" height="10" fill="currentColor" />
              <!-- Pulley & Hook line -->
              <line x1="95" y1="40" x2="95" y2="85" stroke="#D4A017" stroke-width="1.5" stroke-dasharray="2 2" class="animate-cable" />
              <!-- Hanging gear -->
              <g class="text-[#D4A017] animate-gear origin-[95px_90px]">
                <circle cx="95" cy="90" r="8" fill="none" stroke="currentColor" stroke-width="2" />
                <line x1="95" y1="80" x2="95" y2="100" stroke="currentColor" stroke-width="2" />
                <line x1="85" y1="90" x2="105" y2="90" stroke="currentColor" stroke-width="2" />
              </g>
            </g>
          </g>

          <!-- Little Digger/Truck Silhouette on the left -->
          <g class="text-[#D4A017] opacity-80 translate-x-[20px]">
            <rect x="25" y="112" width="22" height="12" rx="2" fill="currentColor" />
            <rect x="35" y="102" width="10" height="10" rx="1" fill="none" stroke="currentColor" stroke-width="2" />
            <circle cx="30" cy="126" r="4" fill="#0a0a0a" stroke="currentColor" stroke-width="2" />
            <circle cx="42" cy="126" r="4" fill="#0a0a0a" stroke="currentColor" stroke-width="2" />
            <!-- Scoop -->
            <path d="M 25 118 L 15 118 L 12 110" stroke="currentColor" stroke-width="2" fill="none" />
          </g>

          <!-- Barricades -->
          <g :class="[isDark ? 'text-white' : 'text-[#1E1E1E]', 'opacity-40 translate-x-[85px] translate-y-[10px]']">
            <line x1="0" y1="120" x2="20" y2="120" stroke="currentColor" stroke-width="3" />
            <line x1="5" y1="120" x2="5" y2="110" stroke="currentColor" stroke-width="2" />
            <line x1="15" y1="120" x2="15" y2="110" stroke="currentColor" stroke-width="2" />
            <line x1="0" y1="112" x2="20" y2="112" stroke="#E8481C" stroke-width="3" />
          </g>
        </svg>

        <!-- Construction glowing ring -->
        <div class="absolute inset-0 rounded-full border border-dashed border-[#D4A017]/20 animate-spin-slow"></div>
      </div>

      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/20 text-[#D4A017] text-xs font-mono mb-6 uppercase tracking-wider">
        <span class="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse"></span>
        En cours de développement
      </div>

      <h1 class="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
        Projet en <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#E8481C] to-[#D4A017]">construction</span>
      </h1>
      
      <p :class="[isDark ? 'text-gray-400' : 'text-gray-600', 'text-base md:text-lg mb-8 leading-relaxed']">
        Ce projet se structure en coulisses et sera bientôt disponible. 
        Revenez très prochainement pour découvrir la démo complète !
      </p>

      <div class="flex gap-4">
        <button 
          @click="router.push('/projects')" 
          class="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-[#E8481C] text-white hover:bg-opacity-90 shadow-lg shadow-[#E8481C]/25 hover:shadow-[#E8481C]/45 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Icon icon="lucide:arrow-left" class="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Voir d'autres projets
        </button>
      </div>
    </main>

  </div>
</template>

<style scoped>
@keyframes crane-rotation {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
}
@keyframes gear-rotation {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes cable-stretch {
  0%, 100% { y2: 85px; }
  50% { y2: 95px; }
}

.animate-crane {
  animation: crane-rotation 12s ease-in-out infinite;
}
.animate-gear {
  animation: gear-rotation 16s linear infinite;
}
.animate-cable {
  animation: cable-stretch 12s ease-in-out infinite;
}
.animate-spin-slow {
  animation: spin 30s linear infinite;
}
</style>
