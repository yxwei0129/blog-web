<template>
    <section id="main-content">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="bootstrap-data-table-panel">
              <div class="table-responsive">
                <el-table
                  :data="tableData"
                  border
                  max-height="250"
                  style="width: 100%">
                  <el-table-column
                    fixed
                    type="index"
                    label="序号"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="title"
                    fixd
                    label="标题"
                    width="200">
                  </el-table-column>
                  <el-table-column
                    prop="category"
                    label="类别"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="tag"
                    label="标签"
                    width="250">
                  </el-table-column>
                  <el-table-column
                    prop="recommend"
                    label="推荐"
                    width="200">
                  </el-table-column>
                  <el-table-column
                    prop="like"
                    label="点赞"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="comment"
                    label="评论"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="updateTime"
                    label="更新时间"
                    width="120">
                  </el-table-column>
                  <el-table-column
                  prop="createTime"
                  label="创建时间"
                  width="120">
                </el-table-column>
                  <el-table-column
                    prop="createBy"
                    label="创建人"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    label="操作"
                    width="150">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text" size="small">置顶</el-button>
                      <el-button type="text" size="small">启用</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="footer">
            <p>2018 © Admin Board. - <a href="#">example.com</a> / More Templates <a href="http://www.cssmoban.com/"
                                                                                     target="_blank" title="模板之家">模板之家</a>
              - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      tableData: [{
        title: '那年',
        category: '情感',
        tag: '文艺',
        recommend: '5',
        like: '39',
        comment: '47',
        updateTime: '2019-4-4',
        createTime: '2019-4-1',
        createBy: 'yxwei'
      }, {
        title: '那年',
        category: '情感',
        tag: '文艺',
        recommend: '5',
        like: '39',
        comment: '47',
        updateTime: '2019-4-4',
        createTime: '2019-4-1',
        createBy: 'yxwei'
      }, {
        title: '那年',
        category: '情感',
        tag: '文艺',
        recommend: '5',
        like: '39',
        comment: '47',
        updateTime: '2019-4-4',
        createTime: '2019-4-1',
        createBy: 'yxwei'
      }, {
        title: '那年',
        category: '情感',
        tag: '文艺',
        recommend: '5',
        like: '39',
        comment: '47',
        updateTime: '2019-4-4',
        createTime: '2019-4-1',
        createBy: 'yxwei'
      }]
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>

<style scoped>

</style>
