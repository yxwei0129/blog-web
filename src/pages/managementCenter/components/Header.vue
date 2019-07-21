<template>
  <div>头部::  <span>{{token}}</span></div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    token () {
      return this.$store.state.login.token
    }
  }
}
</script>

<style scoped>

</style>
