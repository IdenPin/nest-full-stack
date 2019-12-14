import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import CoursesList from "../views/courses/CoursesList.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Main,
    children: [
      {
        name: 'home',
        path: '/',
        component: Home
      },
      {
        name: 'courses-list',
        path: '/courses/list',
        component: CoursesList
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
