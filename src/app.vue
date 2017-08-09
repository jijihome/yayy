<style scoped>
/* .layout {
   border    : 1px solid #d7dde4;
   background: #f5f7f9;
} */

nav:after,
.layout-copy:before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #dddee1;
  bottom: 0;
  left: 0;
  margin-top: -1px;
}

.layout-nav {
  /* width: 420px; */
  margin: 0 auto;
}

.layout-logo {
  width: 100px;
  height: 30px;
  /* background   : #5b6270; */
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  z-index: 999;
  font-size: 22px;
  color: #5b6270;
}

nav .ivu-menu.ivu-menu-horizontal {
  margin-left: 140px;
}

.layout-assistant {
  width: 300px;
  margin: 0 auto;
  height: inherit;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 200px;
  /* margin       : 15px 0;
  overflow     : hidden;
  background   : #fff;
  border-radius: 4px; */
}

.layout-content .nav {
  position: fixed;
  height: 100%;
}

nav .ivu-menu-item>i {
  margin: 0;
}

.layout-copy {
  margin-bottom: 20px;
  margin-top  : 1px;
  color        : #9ea7b4;
  font-size    : 14px;
}

.layout-copy .ivu-row {
  margin: 20px;
  color: #9e9e9e;
}

.layout-copy .copyright {
  color: #9e9e9e;
}

.layout-copy .copyright strong {
  color: #4d4e53;
  font-weight: 400;
}

.layout-copy .icon li {
  display: inline-block;
  margin-right: 10px;
}

.layout-copy i {
  font-size: 24px;
}
</style>


<template>
  <div class="layout">
    <nav>
      <div class="layout-nav">
        <div class="layout-logo">永安运用</div>
        <Menu mode="horizontal" theme="light" router :active-name="root" @on-select="onSelect">
          <Menu-item v-for="(item,index) in $router.options.routes" :key="index" :name="item.path">
            <Icon v-if="item.class" :type="item.class"></Icon>
            {{item.name}}
          </Menu-item>
        </Menu>
      </div>
    </nav>

    <div class="layout-content-main">
      <router-view :path="path"></router-view>
    </div>

    <div class="layout-copy">
      <Row>
        <Col span="16">
        <ul class="icon">
          <li>
            <Icon type="social-html5"></Icon>
          </li>
          <li>
            <Icon type="social-css3-outline"></Icon>
          </li>
          <li>
            <Icon type="social-javascript"></Icon>
          </li>
          <li>
            <Icon type="social-chrome-outline"></Icon>
            </Icon>
          </li>
        </ul>
        </Col>
        <Col span="8">
        <ul class="copyright">
          <li>设计制作：
            <strong>王剑辉</strong> - 13960588330</li>
          <li>当前版本：2.0 beta 1</li>
        </ul>
        </Col>
      </Row>
    </div>
  </div>
</template>


<script>
import './assets/style/reset.css'
import './assets/style/iview-fixed.css'
import './assets/style/global.css'


export default {
  data() {
    return {
      path: '', // 当前路由的路径
      root: '' // 当前路由的根目录
    };
  },
  created() {

  },
  mounted() {

  },
  beforeDestroy() {

  },
  watch: {
    '$route': function (to, from) { // eslint-disable-line no-unused-vars
      this.path = to.path;
      this.root = to.path === '/' ? '/' : to.matched[0].path;
      document.querySelector('.layout-copy').style.display = this.path === '/' ? 'block' : 'none'; // 如果是首页显示页脚（否则隐藏）
    }
  },
  methods: {
    onSelect(name) {
      if (name === this.root) { // 如果点击的是当前已选择导航菜单项目则不做跳转
        return;
      }
      this.$router.push(name);
    }
  }
};
</script>
