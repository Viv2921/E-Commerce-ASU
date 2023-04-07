import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
    }
  },
  {
    path: '/courses',
    name: 'courses',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CoursesView.vue')
    }
  },
  {
    path:'/icourses',
    name:'icourses',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Icourses.vue')
    }
  },
  {
    path:'/registration',
    name:'registration',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Registration.vue')
    }
  },
  {
    path:'/login',
    name:'login',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Login.vue')
    }
  },
  {
    path:'/log',
    name:'log',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/log.vue')
    }
  },
]

 const router = new VueRouter({
  mode: 'history',
  routes
}) 
/* const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

app.mount('#app'); */

export default router
