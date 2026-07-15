import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CVView from "../views/CVView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import UnderConstructionView from "../views/UnderConstructionView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/cv",
    name: "CV",
    component: CVView,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
  },
  {
    path: "/under-construction",
    name: "UnderConstruction",
    component: UnderConstructionView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
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

export default router;
