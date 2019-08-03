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
          <ul class="timeline">
          <li v-for="(comment,index) in commentList" :key="comment.commentId" :commentId="comment.commentId">
          <div class="timeline-badge"><i class="fa">{{index+1}}</i></div>
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
    }
  }
}
</script>

<style scoped>

</style>
