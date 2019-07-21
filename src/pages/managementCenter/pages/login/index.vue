<template>
  <div class="container demo-1">
    <div class="content">
      <div id="large-header" class="large-header">
        <canvas id="demo-canvas"></canvas>
        <div class="logo_box">
          <h3>欢迎你</h3>
          <form action="#" name="f" method="post">
            <div class="input_outer">
              <span class="u_user"></span>
              <input name="logname" class="text" style="color: #FFFFFF !important" type="text"
                     autocomplete="new-password" v-model="loginName" placeholder="请输入账户">
            </div>
            <div class="input_outer">
              <span class="us_uer"></span>
              <input name="logpass" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;"
                     value="" autocomplete="new-password" v-model="password" type="password" placeholder="请输入密码">
            </div>
            <div class="mb2"><a class="act-but submit" href="javascript:;" style="color: #FFFFFF" @click="login">登录</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div><!-- /container -->
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginName: '',
      password: ''
    }
  },
  methods: {
    login () {
      let self = this
      this.$store.dispatch('setLogin', {loginName: this.loginName, password: this.password}).then(function (result) {
        if (result.status === 200) {
          self.$router.push({path: '/home'})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
