import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CVView from "../views/CVView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import UnderConstructionView from "../views/UnderConstructionView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const BASE_URL = "https://edson-lawson.vercel.app";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: "Edson Lawson — Développeur Full-Stack & Fondateur de MiWa | Bénin",
      description: "Edson Lawson, développeur Full-Stack et ingénieur IA basé au Bénin. Expert Laravel, Vue.js, Flutter et agents IA. Fondateur de MiWa. Disponible pour des projets web, mobile et IA.",
      canonical: `${BASE_URL}/`,
    },
  },
  {
    path: "/cv",
    name: "CV",
    component: CVView,
    meta: {
      title: "CV — Edson Lawson | Développeur Full-Stack & Ingénieur IA",
      description: "Curriculum vitae d'Edson Lawson : compétences Laravel, Vue.js, Flutter, Python, IA. Certifications Anthropic, IBM, Cisco, Microsoft. Projets réalisés au Bénin et en Afrique.",
      canonical: `${BASE_URL}/cv`,
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
    meta: {
      title: "Projets — Edson Lawson | Web, Mobile & IA",
      description: "Découvrez tous les projets d'Edson Lawson : MiWa, Identik, Umap, Glamour Chic, BugOuPas, El Maestro. Applications web, mobiles et entrepreneuriat technologique au Bénin.",
      canonical: `${BASE_URL}/projects`,
    },
  },
  {
    path: "/under-construction",
    name: "UnderConstruction",
    component: UnderConstructionView,
    meta: {
      title: "En construction — Edson Lawson",
      description: "Cette page est en cours de construction. Revenez bientôt.",
      canonical: `${BASE_URL}/`,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
    meta: {
      title: "Page introuvable — Edson Lawson",
      description: "La page que vous recherchez n'existe pas.",
      canonical: `${BASE_URL}/`,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

// ── Dynamic SEO meta tags per route ──────────────────────────────
router.afterEach((to) => {
  const meta = to.meta;

  // Title
  if (meta?.title) {
    document.title = meta.title;
  }

  // Meta description
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl && meta?.description) {
    descEl.setAttribute("content", meta.description);
  }

  // Canonical
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (canonicalEl && meta?.canonical) {
    canonicalEl.setAttribute("href", meta.canonical);
  }

  // Open Graph title & description
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && meta?.title) ogTitle.setAttribute("content", meta.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && meta?.description) ogDesc.setAttribute("content", meta.description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl && meta?.canonical) ogUrl.setAttribute("content", meta.canonical);

  // Twitter
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle && meta?.title) twTitle.setAttribute("content", meta.title);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc && meta?.description) twDesc.setAttribute("content", meta.description);
});

export default router;
