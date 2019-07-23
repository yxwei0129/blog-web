<template>
  <div class="content-wrap">
    <div class="main">
      Home
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {}
  },
  computed: {
    msg () {
      return this.$store.state.login.token
    }
  },
  created () {
    // this.$store.dispatch('Login', {isLogin: true, token: 'token12233'})
  },
  methods: {}
}
</script>

<style scoped>

</style>
