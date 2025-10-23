<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";

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

// Typewriter effect
const roles = ref([
  "Développeur Fullstack",
  "Web Designer",
  "Designer UI/UX",
  "Développeur Mobile",
]);
const displayedText = ref("");
const currentRoleIndex = ref(0);
const isDeleting = ref(false);
const typingSpeed = ref(150);

let typewriterTimeout = null;

const typeWriter = () => {
  const currentRole = roles.value[currentRoleIndex.value];

  if (isDeleting.value) {
    displayedText.value = currentRole.substring(
      0,
      displayedText.value.length - 1
    );
    typingSpeed.value = 50;
  } else {
    displayedText.value = currentRole.substring(
      0,
      displayedText.value.length + 1
    );
    typingSpeed.value = 150;
  }

  if (!isDeleting.value && displayedText.value === currentRole) {
    // Pause at end of word
    typingSpeed.value = 2000;
    isDeleting.value = true;
  } else if (isDeleting.value && displayedText.value === "") {
    isDeleting.value = false;
    currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.value.length;
    typingSpeed.value = 500;
  }

  typewriterTimeout = setTimeout(typeWriter, typingSpeed.value);
};

onMounted(() => {
  typeWriter();
});

onUnmounted(() => {
  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout);
  }
});
</script>

<template>
  <header
    class="relative overflow-hidden bg-gradient-to-r from-[#0a192f] to-[#112240]"
    id="home"
  >
    <article
      class="max-w-screen-xl mx-auto px-4 sm:px-8 py-16 md:py-28 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20"
    >
      <!-- Hero content -->
      <section class="w-full lg:w-1/2 text-center lg:text-left">
        <hgroup data-aos="fade-up" data-aos-delay="500">
          <h3 class="text-white">Salut, je m'appelle</h3>
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#00FFFF] mb-4"
          >
            Edson Lawson
          </h1>
          <h3 class="text-white min-h-[2rem] pb-12">
            Et je suis
            <mark class="bg-[#0a192f] text-[#00FFFF]"
              >{{ displayedText }}<span class="animate-pulse">|</span></mark
            >
          </h3>
          <p
            class="text-gray-200 text-base text-center sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0"
          >
            "Développeur Web & Mobile Fullstack, passionné par la création
            d'expériences numériques modernes, rapides et intuitives. Je donne
            vie aux idées en alliant design soigné, performance et technologies
            innovantes."
          </p>
        </hgroup>
        <nav aria-label="Social media links">
          <ul class="flex justify-center space-x-4">
            <li v-for="(item, index) in sociallinks" :key="index">
              <a
                :href="item.href"
                class="w-10 h-10 rounded-full flex items-center justify-center transition duration-300 bg-white hover:bg-[#00FFFF]"
                :aria-label="item.label"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon :icon="item.icon" class="text-[#112240] text-lg" />
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <!-- Hero image -->
      <figure
        data-aos="fade-up"
        data-aos-delay="700"
        class="w-full lg:w-1/2 flex justify-center relative"
      >
        <div class="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
          <img
            src="./assets/home.jpg"
            alt=""
            class="relative z-10 rounded-full shadow-2xl w-full object-cover"
            width="400"
            height="400"
            loading="eager"
          />
        </div>
      </figure>
    </article>
  </header>
</template>
