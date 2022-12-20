import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ContactView from "../views/ContactView.vue";
import TicketDetailsView from "@/views/Ticket/TicketDetailsView";
import TicketEditView from "@/views/Ticket/TicketEditView";
import TicketLayoutView from "@/views/Ticket/TicketLayoutView";

const routes = [
  {
    path: "/",
    name: "HomeView",
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
    name: "TicketLayoutView",
    props: true,
    component: TicketLayoutView,
    children: [
      {
        path: "",
        name: "TicketDetailsView",
        component: TicketDetailsView,
      },
      {
        path: "/edit",
        name: "TicketEditView",
        component: TicketEditView,
      },
    ],
  },
  /*{
    path: "/event/:id/edit",
    name: "TicketEditView",
    props: true,
    component: TicketEditView,
  },*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
