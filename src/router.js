const routers = [{
  path : '/',
  name : '首页',
  class: 'home',
  meta : {
    title: '首页'
  },
  component: (resolve) => require(['./views/index.vue'], resolve),
}, {
  path : '/jkfx',
  name : '监控分析',
  class: 'map',
  meta : {
    title: '监控分析'
  },
  component: (resolve) => require(['./views/jkfx/index.vue'], resolve),
  children: [{
    name     : '分析日统计',
    path     : '/jkfx/total',
    class    : 'map',
    component: (resolve) => require(['./views/jkfx/total.vue'], resolve),
  },{
    name     : '监控分析填报',
    path     : '/jkfx/jk',
    class    : 'map',
    component: (resolve) => require(['./views/jkfx/jk.vue'], resolve),
  }]
}, {
  path : '/lw',
  name : '两违管理',
  class: 'settings',
  meta : {
    title: '两违管理'
  }
}];
export default routers;
