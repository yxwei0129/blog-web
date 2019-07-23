<template>
  <div>q</div>
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
  methods: {

  }
}
</script>

<style scoped>

</style>
