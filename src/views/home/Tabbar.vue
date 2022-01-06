<template>
  <div class="tabbar">
    <div class="tabbar__item" v-for="item in tabbarList" :key="item.icon"  :class="{'tabbar__item--active': item.active}">
      <div class="iconfont tabbar__item__icon" v-html="item.icon"></div>
      <div class="tabbar__item__title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  setup () {
    const tabbarList = [
      { icon: '&#xe6bb;', text: '首页', active: true },
      { icon: '&#xe6a0;', text: '购物车', active: false },
      { icon: '&#xe64b;', text: '订单', active: false },
      { icon: '&#xe660;', text: '我的', active: false }
    ]
    return {
      tabbarList
    }
  }
}
</script>

<style lang="scss" scoped>
.tabbar {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  height: 0.49rem;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0 -1px 1px 0 #f1f1f1;
  &__item {
    flex: 1;
    text-align: center;
    &__icon {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &__title {
      font-size: .2rem;
      transform: scale(.5, .5);
      transform-origin: center top;
    }
  }
  &__item--active {
    color: #1FA4FC;
    font-family: 'PingFang';
  }
}
</style>
