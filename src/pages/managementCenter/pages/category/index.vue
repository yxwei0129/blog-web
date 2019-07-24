<template>
  <div class="content-wrap">
    <div class="main">
      <div class="container-fluid">
        <top-nav></top-nav>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../../components/Nav'

export default {
  name: 'category',
  components: {
    'top-nav': Nav
  }
}
</script>

<style scoped>

</style>
