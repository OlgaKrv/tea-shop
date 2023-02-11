// default
import Vue from 'vue'
import Router from 'vue-router'

// Pages
import MainPage from '../pages/MainPage.vue'
import NotFound from '../pages/404.vue'
import Contacts from '../pages/Contacts.vue'
import TeaVarieties from '../pages/TeaVarieties.vue'
import TeaSample from '../pages/TeaSample.vue'

Vue.use(Router)

// Routering
export default new Router({
  mode: 'history',
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
      path: '/tea-varieties',
      name: 'TeaVarieties',
      component: TeaVarieties,
    },
    {
      path: '/tea-sample',
      name: 'TeaSample',
      component: TeaSample,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})
