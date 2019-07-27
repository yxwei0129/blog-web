<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '../../components/Nav'
export default {
  name: 'index',
  components: {
    'top-nav': Nav
  }
}
</script>

<style scoped>

</style>
