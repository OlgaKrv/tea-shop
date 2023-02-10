// default
import Vue from 'vue'
import Router from 'vue-router'

// Pages
import MainPage from '../pages/MainPage.vue'
import NotFound from '../pages/404.vue'
import Contacts from '../pages/Contacts.vue'

Vue.use(Router)

// Routering
export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})
