<style scoped>
.content {
  padding: 20px;
}
</style>

<template>
  <div class="content" :style="height">
    <p>这是首页</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    /**
     * 大致估算网页高度
     * @return {Object} style 对象
     */
    height() {
      return {
        height: window.screen.height
        - document.querySelector('.layout-copy').offsetHeight
        - document.querySelector('nav').offsetHeight
        - 180
        + 'px'
      }
    }
  }
}
</script>
