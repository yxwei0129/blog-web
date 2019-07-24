<template>
  <div class="unix-login">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="login-content">
            <div class="login-form">
              <h4>管理员登录</h4>
              <form>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="账号">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="密码">
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox"> 记 住
                  </label>
                </div>
                <button type="submit" class="btn btn-primary btn-flat m-b-30 m-t-30" style="font-size: 22px"
                        @click="login()">登 录
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      if (this.loginName === '' || this.password === '') {
        this.$message.error('用户名或密码为空')
        return
      }
      this.$store.dispatch('Login', {loginName: this.loginName, password: this.password}).then(function (result) {
        if (result.status === window.constants.responseCode.login.success) {
          self.$store.dispatch('setLoginStatus', true).then(function () {
            self.$router.push({path: '/homePage'})
          })
        }
      }, function (error) {
        self.$message.error(error.message)
      })
    }
  }
}
</script>

<style scoped>

</style>
