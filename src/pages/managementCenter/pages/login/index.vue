<template>
  <div>
    <h1>未完成的登录页</h1>
    <a @click="login()">直接登录</a>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginName: 'yxwei',
      password: 'yxwei'
    }
  },
  methods: {
    login () {
      let self = this
      // if (this.loginName === '' || this.password === '') {
      //   this.$message.error('用户名或密码为空')
      //   return
      // }
      // this.$store.dispatch('Login', {loginName: this.loginName, password: this.password}).then(function (result) {
      //   if (result.status === window.constants.responseCode.login.success) {
      //     self.$router.push({path: '/home'})
      //   }
      // }, function (error) {
      //   self.$message.error(error.message)
      // })
      this.$store.dispatch('setLoginStatus', true).then(function () {
        self.$router.push({path: '/home'})
      })
    }
  }
}
</script>

<style scoped>

</style>
