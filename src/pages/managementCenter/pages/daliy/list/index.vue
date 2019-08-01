<template>
  <section id="main-content">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-title">
            <h4>时光机器</h4>
          </div>
          <div class="card-body">
            <ul class="timeline" v-if="dailyList.length">
              <li v-for="(item,index) in dailyList" :key="item.id">
                <div class="timeline-badge" :class="{'primary':index/3==0 ,'success': index/3==1,'warning':index/3==2}">
                  <i class="fa fa-smile-o"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h5 class="timeline-title" v-html="item.body"></h5>
                  </div>
                  <div class="timeline-body">
                    <p>
                      <span v-html="item.insert_time"></span>
                      <span style="float: right">
                        <a style="cursor: pointer"><span class="ti-comments"><span style="margin-left: 10px">{{item.comment_count}}</span></span></a>
                        <a style="cursor: pointer"><span class="ti-heart" style="margin-left: 25px"><span style="margin-left: 10px">{{item.like_count}}</span></span></a>
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="card-content" v-else>
              <div class="alert alert-dark" style="text-align: center;font-size: 1rem">
                你的动态暂时为空，赶紧去添加吧~
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="footer">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            style="float: right"
            layout="prev, pager, next"
            :page-size="page.pageNumber"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DailyService from '../../../api/daily'

export default {
  name: 'list',
  data () {
    return {
      dailyList: [],
      page: {
        pageNumber: 5,
        pageStart: 1
      },
      total: 0
    }
  },
  created () {
    this.getDailyList()
  },
  methods: {
    getDailyList () {
      DailyService.getDailyList(this.page.pageStart, this.page.pageNumber).then((result) => {
        if (result.status === 'SH-2001') {
          this.dailyList = result.data.list
          this.total = result.data.total
        }
      })
    },

    handleCurrentChange (index) {
      this.page.pageStart = index
      this.getDailyList()
    }
  }
}
</script>

<style scoped>

</style>
