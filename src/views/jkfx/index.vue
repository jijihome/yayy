<style scoped>
.layout-content .nav {
  position: fixed;
  height  : 100%;
  z-index : 1;
}

.layout-content .right-side {
  margin-left: 180px;
  padding    : 20px;
}
</style>


<template>
  <div class="layout-content">
    <Menu class="nav" active-name="1-2" width="180px" :open-names="['report','edit','manage']" :active-name="path" @on-select="onSelect">
      <Submenu name="report">
        <template slot="title">
          <Icon type="printer"></Icon>
          报表
        </template>
        <Menu-item name="/jkfx/total">分析日统计</Menu-item>
      </Submenu>
      <Submenu name="edit">
        <template slot="title">
          <Icon type="edit"></Icon>
          信息填报
        </template>
        <Menu-item name="/jkfx/jk">监控分析填报</Menu-item>
        <Menu-item name="2-2">视频分析填报</Menu-item>
      </Submenu>
      <Submenu name="manage">
        <template slot="title">
          <Icon type="archive"></Icon>
          信息管理
        </template>
        <Menu-item name="3-1">定责</Menu-item>
        <Menu-item name="3-2">审核</Menu-item>
        <Menu-item name="3-2">管理</Menu-item>
      </Submenu>
    </Menu>
  
    <div class="right-side">
      <router-view></router-view>
    </div>
  </div>
</template>



<script>


export default {
  props: {
    path: ''
  },
  created() {
    // console.log(this.$router) // eslint-disable-line
    this.$router.push('/jkfx/total'); // 默认跳转到：分析日统计
  },
  methods: {
    onSelect(name) {
      // this.$Modal.info({
      //   title  : 'Bravo',
      //   content: 'Now, enjoy the convenience of iView.'
      // });
      this.$router.push(name);
    }
  }
};
</script>

