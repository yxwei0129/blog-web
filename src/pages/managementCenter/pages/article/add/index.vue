<template>
    <div class="col-lg-12 p-r-0 title-margin-right">
      <div class="page-header">
        <div class="page-title">
          <h1>添加文章</h1>
          <the-editor></the-editor>
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
