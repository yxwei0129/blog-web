<template>
  <section id="main-content">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="bootstrap-data-table-panel">
            <div class="table-responsive">
              <el-table
                :data="tableData"
                style="width: 100%"
                max-height="500">
                <el-table-column
                  fixed
                  prop="id"
                  label="ID"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="名称"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="description"
                  label="描述"
                  width="350">
                </el-table-column>
                <el-table-column
                  prop="updateTime"
                  label="更新日期"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="createTime"
                  label="创建日期"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="createBy"
                  label="创建人"
                  width="180">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="修改"
                  width="100">
                  <template slot-scope="scope">
                    <el-button
                      @click.native.prevent="deleteRow(scope.$index, tableData)"
                      type="text"
                      size="small">
                      编辑
                    </el-button>
                  </template>
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="启用"
                  width="100">
                  <template slot-scope="scope">
                    <el-switch
                      v-model="value"
                      active-color="#13ce66"
                      inactive-color="#ff4949">
                    </el-switch>
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
      value: true,
      tableData: [{
        id: '1',
        name: 'Vue.js',
        description: 'Vue全家桶及其生态、插件全系列',
        updateTime: '2019-7-25',
        createTime: '2019-6-3',
        createBy: 'yxwei'
      }, {
        id: '2',
        name: 'webpack',
        description: 'webpack全系列',
        updateTime: '2019-5-27',
        createTime: '2019-1-23',
        createBy: 'yxwei'
      }, {
        id: '3',
        name: 'Node.js',
        description: 'Node.js全系列',
        updateTime: '2019-4-21',
        createTime: '2019-3-3',
        createBy: 'yxwei'
      }, {
        id: '4',
        name: 'Javascript',
        description: 'Javascript全系列',
        updateTime: '2018-4-4',
        createTime: '2018-2-16',
        createBy: 'yxwei'
      }]
    }
  }
}
</script>

<style scoped>

</style>
