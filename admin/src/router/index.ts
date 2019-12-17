import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import ResourceCrud from "../views/ResourceCrud.vue";
// import CoursesList from "../views/courses/CoursesCrud.vue";
// import CoursesList from "../views/courses/CoursesList.vue";
// import CoursesEdit from "../views/courses/CoursesEdit.vue";
// import EpisodesList from "../views/episodes/EpisodesList.vue";

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
        name: 'resource-crud',
        path: '/:resource/list',
        props: true,
        component: ResourceCrud
      }
      // {
      //   name: 'courses-list',
      //   path: '/courses/list',
      //   component: CoursesList
      // }
      // 课程管理
      // {
      //   name: 'courses-list',
      //   path: '/courses/list',
      //   component: CoursesList
      // },
      // {
      //   name: 'courses-edit',
      //   path: '/courses/edit/:id',
      //   component: CoursesEdit,
      //   props: true
      // },
      // {
      //   name: 'courses-create',
      //   path: '/courses/create',
      //   component: CoursesEdit
      // },
      // // 课时管理
      // {
      //   name: 'episodes-list',
      //   path: '/episodes/list',
      //   component: EpisodesList
      // },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
