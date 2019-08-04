<template>
  <section id="main-content">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-title" style="margin-top: 20px">
            <p v-html="item.dailyBody"></p>
          </div>
          <div class="timeline-body">
            <p span style="float: right">
              {{item.insertTime}}
            </p>
          </div>
          <el-divider></el-divider>
          {{item.commentCount}} 条评论
          <ul class="timeline" style="overflow-y: auto;max-height: 400px">
            <li v-for="(comment,index) in commentList" :key="comment.commentId" :commentId="comment.commentId">
                <div class="timeline-badge warning"><i class="fa">{{index+1}}</i></div>
                <div class="timeline-panel">
                <the-comment :item="comment"></the-comment>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Comment from '../../../components/Comment'
import DailyService from '../../../api/daily'

export default {
  name: 'index',
  data () {
    return {
      item: '',
      commentList: []
    }
  },
  components: {
    'the-comment': Comment
  },
  created () {
    this.item = JSON.parse(this.$route.query.item)
    this.getDailyDetail()
  },
  methods: {
    /**
       * 获取详情及评论
       */
    getDailyDetail () {
      let dailyId = this.item.dailyId
      DailyService.getDailyDetail(dailyId).then((result) => {
        if (result.status === 'SH-2001') {
          this.commentList = result.data
        }
      })
    },

    /**
     * 删除删除评论，根据commentId
     * @param item
     */
    deleteItem (item) {
      this.$confirm('确定删除该评论, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        DailyService.deleteComment(item.id).then((result) => {
          if (result.status === 'SH-2001') {
            this.$message.success('删除成功')
            this.getDailyDetail()
          }
        })
      }).catch(() => {
      })
    }
  }
}
</script>

<style scoped>

</style>
