import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/info",
    name: "NewInfo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewInfo.vue")
  },
  {
    path: "/error",
    name: "ErrorPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ErrorPage.vue")
  },
  {
    path: "/vuexDemo",
    name: "ParentVuex",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ParentVuex.vue")
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
