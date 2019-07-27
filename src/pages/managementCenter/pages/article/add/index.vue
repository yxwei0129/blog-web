<template>
    <div class="col-lg-12 p-r-0 title-margin-right">
      <div class="page-header">
        <div class="page-title">
          <i class="el-icon-edit"></i>请编辑文章
          <the-editor style="margin-top: 20px"></the-editor><br/>
          <el-button type="primary" style="float: right">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
      </div>
    </div>
</template>

<script>
import Editor from '../../../components/Editor'

export default {
  name: 'index',
  components: {
    'the-editor': Editor
  }
}
</script>

<style scoped>

</style>
