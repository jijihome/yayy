import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';


Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);


// 路由配置
const RouterConfig = {
  mode  : 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  /**
   * @param {Route}    to   即将要进入的目标路由对象
   * @param {Route}    from 当前导航正要离开的路由对象
   * @param {Function} next 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
   */
  iView.LoadingBar.start();
  Util.title(to.meta.title);
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});


const store = new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
});


export default new Vue({
  el    : '#app',
  router: router,
  store : store,
  render: (h) => h(App)
});
