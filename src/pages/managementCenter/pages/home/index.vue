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
    return {
      msg: '111'
    }
  },
  methods: {
    testToke () {
      let self = this
      loginApi.logout().then(function (reslut) {
        debugger
        self.msg = JSON.stringify(reslut.data)
      })
    }
  }
}
</script>

<style scoped>

</style>
