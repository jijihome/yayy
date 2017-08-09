const basePath = ''

const routers = [
  //
  {
    path     : basePath + '/',
    name     : '首页',
    class    : 'home',
    component: (resolve) => require(['./views/home.vue'], resolve),
    // meta: {title: '首页'},
  },
  {
    path     : basePath + '/jkfx',
    name     : '监控分析',
    class    : 'map',
    component: (resolve) => require(['./views/jkfx/index.vue'], resolve),
    children : [{
      name     : '分析日统计',
      path     : basePath + '/jkfx/total',
      class    : 'map',
      component: (resolve) => require(['./views/jkfx/total.vue'], resolve),
    }, {
      name     : '监控分析填报',
      path     : basePath + '/jkfx/jk',
      class    : 'map',
      component: (resolve) => require(['./views/jkfx/jk.vue'], resolve),
    }]
  },
  {
    path : basePath + '/lw',
    name : '两违管理',
    class: 'settings'
  }
];
export default routers;
