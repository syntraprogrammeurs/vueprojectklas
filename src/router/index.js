import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ContactView from "../views/ContactView.vue";
import TicketDetailsView from "@/views/TicketDetailsView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/country",
    name: "country",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CountryView.vue"),
  },
  {
    path: "/event/:id",
    name: "TicketDetailsView",
    props: true,
    component: TicketDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
