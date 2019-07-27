<template>
  <div>
    <i class="el-icon-edit"></i>请编辑动态
    <the-editor style="margin-top: 20px"></the-editor><br/>
    <el-button type="primary" style="float: right">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</template>

<script>
import Editor from '../../../components/Editor'

export default {
  name: 'index',
  data () {
    return {
      textarea: ''
    }
  },
  components: {
    'the-editor': Editor
  }
}
</script>

<style scoped>

</style>
