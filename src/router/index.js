import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import Root from '@/pages/Root';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Root',
      component: Root,
    },
  ],
});
