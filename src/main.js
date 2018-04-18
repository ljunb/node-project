// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Axios from 'axios';
import ElementUI from 'element-ui';
import App from './App';
import router from './router';

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

router.beforeEach((to, form, next) => {
  const token = sessionStorage.getItem('node-project');
  if (to.path === '/') {
    if (token) {
      next('/todoList');
    }
    next();
  } else {
    if (token) {
      Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
      next();
    } else {
      next('/');
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
