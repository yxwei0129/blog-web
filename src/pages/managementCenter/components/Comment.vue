<template>
  <div>
    <div class="timeline-heading">
      <div class="media-left">
        <section class="el-container">
          <aside class="el-aside" style="width: 60px;align-self:center">
            <img class="comment-author" :src="item.authorEmail | getImagePhoto" >
          </aside>
          <main class="el-main">
            <span class="comment-author-name"><a href="http://www.baidu.com" target="_blank" rel="external nofollow">{{item.authorName}}</a></span>
            <div class="comment-time">{{item.insertTime | timeHandle}}</div>
            <div v-if="item.target"><span class="comment-author-name">@{{item.target.name}}</span> : {{item.target.body}}</div>
            <div class="comment-body" v-html="item.body"></div>
          </main>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    item: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
