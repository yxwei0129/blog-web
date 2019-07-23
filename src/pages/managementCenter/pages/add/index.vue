<template>
  <div class="content-wrap">
    <div class="main">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 p-r-0 title-margin-right">
            <div class="page-header">
              <div class="page-title">
                <h1>Hello, <span>Welcome yxwei</span></h1>
              </div>
            </div>
          </div>
          <!-- /# column -->
          <div class="col-lg-4 p-l-0 title-margin-left">
            <div class="page-header">
              <div class="page-title">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">首页</a></li>
                  <li class="breadcrumb-item active">添加文章</li>
                </ol>
              </div>
            </div>
          </div>
          <!-- /# column -->
        </div>
        <div class="col-lg-12 p-r-0 title-margin-right">
          <div class="page-header">
            <div class="page-title">
              <h1>添加文章</h1>
              <the-editor></the-editor>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from '../../components/Editor'

export default {
  name: 'index',
  components: {
    'the-editor': Editor
  }
}
</script>

<style scoped>

</style>
