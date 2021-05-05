import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Course from "../views/Course.vue";
import Module from "../views/Module.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/students",
    name: "Student",
    // route level code-splitting
    // this generates a separate chunk (student.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "student" */ "../views/Students.vue"),
  },
  {
    path: "/courses",
    name: "Course",
    component: Course
  },
  {
    path: "/modules",
    name: "Module",
    component: Module
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  // linkActiveClass: "v-btn--is-elevated",
  linkExactActiveClass: "v-btn--is-elevated",
});

export default router;
