<script>

import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'


export default {
  components: {
    AppHeader,
    AppFooter

  }
}
</script>
<template lang="">
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped></style>