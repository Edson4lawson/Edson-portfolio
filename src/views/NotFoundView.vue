<script setup>
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

const router = useRouter();
</script>

<template>
  <div class="min-h-screen bg-[#0d0d0d] text-white flex flex-col justify-between p-6 relative overflow-hidden font-sans">
    <!-- Grid background decoration -->
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]"></div>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col justify-center items-center relative z-10 select-none">
      <!-- Split 404 display container -->
      <div class="relative w-full max-w-xl flex flex-col items-center">
        <!-- Subtitle above "404" -->
        <span class="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-4">
          Page was not found
        </span>

        <!-- Giant Split 404 Text -->
        <div class="relative text-[10rem] sm:text-[14rem] md:text-[17rem] font-black leading-none tracking-tighter w-full h-[10rem] sm:h-[14rem] md:h-[17rem] flex justify-center items-center">
          <!-- Top Half -->
          <div class="absolute inset-0 flex justify-center items-center text-white clip-top transform -translate-x-2 md:-translate-x-3 select-none">
            404
          </div>
          <!-- Bottom Half -->
          <div class="absolute inset-0 flex justify-center items-center text-white clip-bottom transform translate-x-2 md:translate-x-3 select-none">
            404
          </div>
        </div>

        <!-- Descriptive paragraph below -->
        <p class="text-gray-500 text-sm max-w-xs md:max-w-sm text-center mt-12 mb-8 leading-relaxed">
          The link you followed might be broken, or the page has been removed. Let's get you back on track.
        </p>

        <!-- CTA Buttons -->
        <button 
          @click="router.push('/')" 
          class="interactive group flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <Icon icon="lucide:arrow-left" class="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Retour au Portfolio
        </button>
      </div>
    </main>

  </div>
</template>

<style scoped>
.clip-top {
  clip-path: polygon(0 0, 100% 0, 100% 49.5%, 0 49.5%);
}
.clip-bottom {
  clip-path: polygon(0 50.5%, 100% 50.5%, 100% 100%, 0 100%);
}
</style>
