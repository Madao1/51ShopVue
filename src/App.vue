<template>
  <div class="tabBox">
    <ul class="tab">
      <li :class="{active : active == 'new'}" @click="showNew">最新</li>
      <li :class="{active : active == 'hot'}" @click="showHot">热门</li>
      <li :class="{active : active == 'recommend'}" @click="showRecommend">推荐</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name : 'app',
  data : function(){
    return {
      active : 'new'
    }
  },
  methods : {
    showNew : function(){
      this.active = 'new';
      this.$router.push({ name: 'new'});//跳转到最新新闻
    },
    showHot : function(){
      this.active = 'hot';
      this.$router.push({ name: 'hot'});//跳转到热门新闻
    },
    showRecommend : function(){
      this.active = 'recommend';
      this.$router.push({ name: 'recommend'});//跳转到推荐新闻
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/style.css';  /*引入公共CSS文件*/
</style>
