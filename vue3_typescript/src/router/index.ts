import { createRouter, createWebHistory } from "vue-router";

const Login = () => import("@/views/login/LoginPage.vue");
const Dashboard = () => import("@/views/home/Dashboard.vue");
const About = () => import("@/views/home/About.vue");
const NotFound = () => import("@/components/notfound/NotFound.vue");

const routes = [
  {
    path: "/login",
    component: Login,
    name: "Login",
    meta: {
      layout: "simple",
    },
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
    meta: {
      layout: "default",
    },
  },
  {
    path: "/about",
    component: About,
    name: "About",
    meta: {
      layout: "default",
    },
  },
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "NotFound",
    meta: {
      layout: "simple",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
