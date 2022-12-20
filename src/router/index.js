import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ContactView from "../views/ContactView.vue";
import TicketLayoutView from "@/views/Ticket/TicketLayoutView";
import TicketDetailsView from "@/views/Ticket/TicketDetailsView";
import TicketEditView from "@/views/Ticket/TicketEditView";
import TicketRegisterView from "@/views/Ticket/TicketRegisterView";
import p404View from "../views/p404View";

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
    path: "/contact-us",
    name: "contact-us",
    component: ContactView,
  },
  {
    path: "/contact",
    redirect: { name: "contact-us" },
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
    path: "/events/:id",
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
        path: "edit",
        name: "TicketEditView",
        component: TicketEditView,
      },
      {
        path: "register",
        name: "TicketRegisterView",
        component: TicketRegisterView,
      },
    ],
  },
  {
    path: "/event/:id",
    redirect: (to) => {
      return { name: "TicketDetailsView", params: { id: to.params.id } };
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "p404View",
    component: p404View,
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
