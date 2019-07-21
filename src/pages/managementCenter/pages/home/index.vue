<template>
  <div>
    <div>首页：</div>
    <button @click="testToke">测试token过期</button>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import loginApi from '../../api/login'

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
    testToke () {
      let self = this
      loginApi.logout().then(function (reslut) {
        self.$store.dispatch('setTest', reslut.data)
      })
    }
  }
}
</script>

<style scoped>

</style>
