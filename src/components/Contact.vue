<template>
  <main id="contact"
    class="flex flex-col lg:flex-row gap-12 py-20 px-6 max-w-6xl mx-auto transition-colors duration-500"
    :style="{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }">
    <!-- Contact Info Panel -->
    <aside class="lg:w-2/5 contact-info-panel opacity-0">
      <section
        class="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl shadow-xl p-8 h-full flex flex-col justify-between">
        <div>
          <h2 class="text-xl font-bold mb-6 text-[var(--text-color)] border-l-4 border-[#E8481C] pl-3">
            Commençons à échanger
          </h2>
          <p class="text-sm md:text-base text-[var(--text-muted)] leading-relaxed mb-8">
            Vous avez une idée, un projet ou une opportunité de collaboration ? N'hésitez pas à m'envoyer un message. Je
            serais ravi d'échanger avec vous pour concrétiser vos projets numériques.
          </p>

          <address class="space-y-6 not-italic">
            <article v-for="(item, index) in contactItems" :key="index" class="flex items-start">
              <div
                class="bg-[var(--bg-color)] border border-[var(--border-color)] p-3 rounded-full mr-4 flex-shrink-0 text-[#E8481C]">
                <Icon :icon="item.icon" class="text-xl" />
              </div>
              <div>
                <h3 class="font-bold text-sm text-[var(--text-color)] uppercase tracking-wider mb-1">
                  {{ item.title }}
                </h3>
                <div v-html="item.content" class="text-sm text-[var(--text-muted)]"></div>
              </div>
            </article>
          </address>
        </div>

        <nav aria-label="Social media links" class="mt-12">
          <ul class="flex space-x-3">
            <li v-for="(item, index) in sociallinks" :key="index">
              <a :href="item.href" target="_blank" rel="noopener noreferrer"
                class="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-color)] flex items-center justify-center transition-all duration-300 text-[var(--text-muted)] hover:text-white hover:bg-[#E8481C] hover:border-[#E8481C] interactive"
                :aria-label="item.label">
                <Icon :icon="item.icon" class="text-lg" />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </aside>

    <!-- Contact Form Panel -->
    <section class="lg:w-3/5 contact-form-panel opacity-0">
      <div class="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl shadow-xl p-8 h-full">
        <h2 class="text-2xl md:text-3xl font-extrabold text-[var(--text-color)] mb-6">
          Envoyez un <span class="text-[#E8481C]">message</span>
        </h2>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <input type="hidden" name="_subject" value="Nouveau message de votre portfolio 🚀" />

          <fieldset class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="First-name" class="block font-semibold text-sm mb-2 text-[var(--text-muted)]">
                Prénom
              </label>
              <input type="text" id="First-name" v-model="form.first_name" name="first_name"
                class="w-full px-4 py-3.5 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[#E8481C] focus:border-transparent transition-all duration-300"
                placeholder="Votre prénom" required />
            </div>

            <div>
              <label for="Last-name" class="block font-semibold text-sm mb-2 text-[var(--text-muted)]">
                Nom
              </label>
              <input type="text" id="Last-name" v-model="form.last_name" name="last_name"
                class="w-full px-4 py-3.5 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[#E8481C] focus:border-transparent transition-all duration-300"
                placeholder="Votre nom" required />
            </div>
          </fieldset>

          <div>
            <label for="email" class="block font-semibold text-sm mb-2 text-[var(--text-muted)]">
              Adresse e-mail
            </label>
            <input type="email" id="email" v-model="form.email" name="email"
              class="w-full px-4 py-3.5 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[#E8481C] focus:border-transparent transition-all duration-300"
              placeholder="Votre@email.com" required />
          </div>

          <div>
            <label for="message" class="block font-semibold text-sm mb-2 text-[var(--text-muted)]">
              Votre message
            </label>
            <textarea id="message" v-model="form.message" name="message" rows="5"
              placeholder="Écrivez votre message ici..."
              class="w-full px-4 py-3.5 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[#E8481C] focus:border-transparent transition-all duration-300"
              required></textarea>
          </div>

          <!-- Status Messages -->
          <p v-if="successMessage" class="text-green-400 font-semibold text-sm">
            ✅ {{ successMessage }}
          </p>
          <p v-if="errorMessage" class="text-red-400 font-semibold text-sm">
            ❌ {{ errorMessage }}
          </p>

          <div>
            <button type="submit"
              class="interactive w-full md:w-auto px-8 py-4 rounded-xl font-bold text-white bg-[#E8481C] hover:bg-opacity-95 transition-all duration-300 shadow-md transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="soumettre le formulaire de contact" :disabled="loading">
              <span v-if="!loading">Envoyer le message</span>
              <span v-else>Envoi en cours...</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const form = ref({
  first_name: "",
  last_name: "",
  email: "",
  message: "",
});

const successMessage = ref("");
const errorMessage = ref("");
const loading = ref(false);

const handleSubmit = async () => {
  successMessage.value = "";
  errorMessage.value = "";
  loading.value = true;

  try {
    const response = await fetch("https://formspree.io/f/mqayrkqd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form.value),
    });

    if (response.ok) {
      successMessage.value = "Merci ! Votre message a bien été envoyé ✅";
      form.value = { first_name: "", last_name: "", email: "", message: "" };
    } else {
      errorMessage.value = "Oups, une erreur est survenue. Veuillez réessayer plus tard.";
    }
  } catch (error) {
    errorMessage.value = "Erreur réseau. Veuillez vérifier votre connexion.";
  } finally {
    loading.value = false;
  }
};

const contactItems = ref([
  {
    icon: "lucide:phone",
    title: "Numéro de téléphone",
    content: `<p><a href="tel:+2290154047392" class="link-hover hover:text-[#E8481C] transition-colors">+229 01540 47392</a></p>`,
  },
  {
    icon: "lucide:mail",
    title: "Adresse e-mail",
    content: `<p><a href="mailto:Edson4lawson@gmail.com" class="link-hover hover:text-[#E8481C] transition-colors">Edson4lawson@gmail.com</a></p>`,
  },
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

onMounted(() => {
  gsap.fromTo(
    ".contact-info-panel",
    { opacity: 0, x: -40 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );

  gsap.fromTo(
    ".contact-form-panel",
    { opacity: 0, x: 40 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );
});
</script>
