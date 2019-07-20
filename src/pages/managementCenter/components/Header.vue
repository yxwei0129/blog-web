<template>
  <div>头部::  <span>{{loginInfo}}</span></div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    loginInfo () {
      debugger
      return this.$store.state.login.loginInfo
    }
  }
}
</script>

<style scoped>

</style>
