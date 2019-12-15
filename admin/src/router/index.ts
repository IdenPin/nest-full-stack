import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import CoursesList from "../views/courses/CoursesList.vue";
import CoursesEdit from "../views/courses/CoursesEdit.vue";

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
      },
      {
        name: 'courses-list',
        path: '/courses/list',
        component: CoursesList
      },
      {
        name: 'courses-edit',
        path: '/courses/edit/:id',
        component: CoursesEdit,
        props: true
      },
      {
        name: 'courses-create',
        path: '/courses/create',
        component: CoursesEdit
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
