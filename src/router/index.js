import Vue from 'vue';
import Router from 'vue-router';

// CATEGORIES
import QuienesSomosPage from '../docs/QuienesSomosPage';
import ServiciosPage from '../docs/ServiciosPage';
import DictamenPage from '../docs/DictamenPage';

import HomePage from '../docs/HomePage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },{
      path:'/quienes_somos',
      name: 'QuienesSomosPage',
      component: QuienesSomosPage
    },{
      path:'/servicios',
      name: 'ServiciosPage',
      component: ServiciosPage
    },{
      path:'/dictamen',
      name: 'DictamenPage',
      component: DictamenPage
    },
  ]
});
