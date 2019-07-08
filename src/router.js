import Vue from "vue";
import Router from "vue-router";
import HomeView from "./components/views/HomeView";
import AboutView from "./components/views/AboutView";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    }
  ]
});
