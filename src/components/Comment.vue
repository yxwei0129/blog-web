<template>
  <div class="leave-comment">

    <div class="sidebar-title center-align">
      <h2>评论</h2>
    </div>
    <form class="comment-area w100dt" action="#">
      <div class="row">
        <div class="col m6 s12">
          <div class="form-item">
            <input id="icon_prefix" type="text" class="validate">
            <label for="icon_prefix">名称</label>
          </div>
        </div>
        <div class="col m6 s12">
          <div class="form-item">
            <input id="email" type="email" class="validate">
            <label for="email" data-error="wrong" data-success="right">邮件</label>
          </div>
        </div>
        <div class="col s12">
          <div class="form-item">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">评论</label>
          </div>
        </div>
      </div>
      <!-- row -->
      <button type="button" class="custom-btn waves-effect waves-light right">提交</button>
    </form>
    <!-- /.comment-area -->
  </div>
</template>

<script>
    export default {
        name: "comment"
    }
</script>

<style scoped>

</style>
