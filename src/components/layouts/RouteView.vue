<template>
  <keep-alive v-if="keepAlive">
    <router-view :key="$route.fullPath" />
  </keep-alive>
  <router-view v-else
               :key="$route.fullPath" />
</template>

<script>
export default {
  name: 'RouteView',
  computed: {
    keepAlive () {
      return this.$route.meta.keepAlive
    },
  }
}
</script>

<style>

</style>