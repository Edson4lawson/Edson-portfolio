<template>
    <div>
        <Hero />
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import Hero from './components/Hero.vue';
import Home from './Home.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from './Skills.vue';
import Projects from './Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import { Icon } from "@iconify/vue";

onMounted(() => {
    AOS.init();
});
</script>
