<template>
  <div id="app">
    <div id="nav">
      <navigation />
    </div>
    <router-view/>
  </div>
</template>

<script>
import navigation from '@/components/layout/navigation.vue'
export default {
  components: {
    navigation
  }
}

</script>

<style lang="scss">
  @import './scss/app.scss';
</style>
