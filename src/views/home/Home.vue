<template>
    <TabBar />
    <NearBy />
</template>

<script>
import TabBar from './Tabbar.vue'
import NearBy from './NearBy.vue'
export default {
  name: 'Home',
  components: {
    TabBar,
    NearBy
  }
}
</script>
