<template>
  <div>
    <div class="timeline-heading">
      <div class="media-left">
        <section class="el-container">
          <aside class="el-aside" style="width: 60px;align-self:center">
            <img class="comment-author" :src="item.authorEmail | getImagePhoto" >
          </aside>
          <main class="el-main">
            <div style="float:left; width:95%; height:100%;">
              <span class="comment-author-name"><a href="http://www.baidu.com" target="_blank" rel="external nofollow">{{item.authorName}}</a></span>
              <div class="comment-time">{{item.insertTime | timeHandle}}</div>
              <div v-if="item.target.name"><span class="comment-author-name">@{{item.target.name}}</span> : {{item.target.body}}</div>
              <div class="comment-body" v-html="item.body"></div>
            </div>
            <div style="float:left; width:5%; height:100%;">
              <a @click="deleteItem(item)"><i class="el-icon-delete" style="position:relative;left:50%;top:50%;font-size:22px;margin:auto;cursor: pointer"></i></a>
            </div>
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
  },
  methods: {
    /**
     * 调用父组件方法删除删除评论，根据commentId
     * @param item
     */
    deleteItem (item) {
      this.$parent.deleteItem(item)
    }
  }
}
</script>

<style scoped>

</style>
