<template>
  <main
    id="contact"
    class="flex flex-col lg:flex-row gap-12 bg-gradient-to-r from-[#0a192f] to-[#112240] py-16 px-4 sm:px-8"
  >
    <!-- Contact info -->
    <aside class="lg:w-2/5" data-aos="fade-up" data-aos-delay="200">
      <section class="bg-[#112240] rounded-2xl shadow-xl p-8 h-full">
        <h2 class="text-2xl text-center font-bold text-white mb-6">
          "Vous avez une idée, un projet ou une collaboration en tête ?  
          N'hésitez pas à me contacter. Je serai ravi d'échanger avec vous pour  
          transformer vos idées en solutions numériques concrètes et efficaces."
        </h2>

        <address class="space-y-6">
          <article
            v-for="(item, index) in contactItems"
            :key="index"
            class="flex items-start"
          >
            <figure
              class="bg-[#112240] hover:bg-[#00FFFF] p-3 rounded-full mr-4 flex-shrink-0"
            >
              <Icon :icon="item.icon" class="text-[#00FFFF] text-xl" />
            </figure>
            <div>
              <h3 class="font-semibold text-[#00FFFF]">
                {{ item.title }}
              </h3>
              <div v-html="item.content" class="text-white"></div>
            </div>
          </article>

          <nav aria-label="Social media links">
            <ul class="flex space-x-4">
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
        </address>
      </section>
    </aside>

    <!-- Contact form -->
    <section class="lg:w-3/5">
      <div class="bg-[#112240] rounded-2xl shadow-2xl p-8 h-full">
        <h2 class="text-3xl font-bold text-white mb-6">
          Envoyez-nous un <span class="text-cyan-400">message</span>
        </h2>

        <!-- ✅ Formspree avec fetch -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <input
            type="hidden"
            name="_subject"
            value="Nouveau message de votre portfolio 🚀"
          />

          <fieldset class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="First-name" class="block text-white font-medium mb-2">
                Prénom
              </label>
              <input
                type="text"
                id="First-name"
                v-model="form.first_name"
                name="first_name"
                class="w-full px-4 py-4 border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Votre prénom"
                required
              />
            </div>

            <div>
              <label for="Last-name" class="block text-white font-medium mb-2">
                Nom
              </label>
              <input
                type="text"
                id="Last-name"
                v-model="form.last_name"
                name="last_name"
                class="w-full px-4 py-4 border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Votre nom"
                required
              />
            </div>
          </fieldset>

          <div>
            <label for="email" class="block text-white font-medium mb-2">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              name="email"
              class="w-full px-4 py-4 border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              placeholder="Votre@email.com"
              required
            />
          </div>

          <div>
            <label for="message" class="block text-white font-medium mb-2">
              Votre message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              name="message"
              rows="5"
              placeholder="Votre message"
              class="w-full px-4 py-4 border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              required
            ></textarea>
          </div>

          <!-- ✅ Messages d'état -->
          <p v-if="successMessage" class="text-green-400 font-semibold">
            ✅ {{ successMessage }}
          </p>
          <p v-if="errorMessage" class="text-red-400 font-semibold">
            ❌ {{ errorMessage }}
          </p>

          <div>
            <button
              type="submit"
              class="bg-cyan-400 hover:shadow-[0_0_15px_#00FFFF] text-black px-8 py-3 rounded-full transition shadow-lg w-full md:w-auto"
              aria-label="soumettre le formulaire de contact"
              :disabled="loading"
            >
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
import { ref } from "vue";
import { Icon } from "@iconify/vue";

// ✅ Données du formulaire
const form = ref({
  first_name: "",
  last_name: "",
  email: "",
  message: "",
});

const successMessage = ref("");
const errorMessage = ref("");
const loading = ref(false);

// ✅ Fonction d'envoi du message à Formspree
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
      errorMessage.value =
        "Oups, une erreur est survenue. Veuillez réessayer plus tard.";
    }
  } catch (error) {
    errorMessage.value = "Erreur réseau. Vérifiez votre connexion.";
  } finally {
    loading.value = false;
  }
};

// ✅ Informations de contact
const contactItems = ref([
  {
    icon: "mdi:phone",
    title: "Numéro de téléphone",
    content: `<p>Tel : <a href="tel:+2290154047392" class="hover:text-cyan-400">+229 01540 47392</a></p>`,
  },
  {
    icon: "mdi:email",
    title: "Adresse e-mail",
    content: `<p>Email : <a href="mailto:Edson4lawson@gmail.com" class="hover:text-cyan-400">Edson4lawson@gmail.com</a></p>`,
  },
]);

// ✅ Réseaux sociaux
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
