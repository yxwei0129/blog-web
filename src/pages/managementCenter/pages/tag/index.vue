<template>
  <div class="col-lg-12 p-r-0 title-margin-right">
    <div class="page-header">
      <i class="el-icon-edit"></i> 标签列表:
      <div class="page-title table-responsive">
        <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%"
          max-height="450">
          <el-table-column
            fixed
            type="index"
            label="序号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="id"
            label="ID"
            width="200">
          </el-table-column>
          <el-table-column
            prop="name"
            label="标签"
            width="200">
          </el-table-column>
          <el-table-column
            prop="updateTime"
            label="更新日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="添加日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="createBy"
            label="创建人"
            width="180">
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                width="300"
                placeholder="输入标签名搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="edit(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="delete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="info" @click="add()" round style="float: left;margin-top: 20px">添加标签</el-button>
      </div>
      <el-divider></el-divider>
      <p><i class="ti-wallet"> 标签云:</i></p>
      <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>
    </div>
    <el-dialog
      title="添加"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <p data-v-6d7afda1="">
        <lable data-v-6d7afda1="" class="text-muted m-b-15 f-s-12">标签名称</lable>
        <span data-v-6d7afda1="" class="text-danger">*</span> :
      </p>
      <el-form :model="form">
        <el-input autocomplete="off"></el-input>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="saveTag">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      tableData: [{
        id: '0101',
        name: '我的',
        updateTime: '2019-2-2',
        createTime: '2019-2-2',
        createBy: 'yxwei'
      }, {
        id: '0102',
        name: '你的',
        updateTime: '2019-2-2',
        createTime: '2019-2-2',
        createBy: 'yxwei'
      }, {
        id: '0103',
        name: '她的',
        updateTime: '2019-2-2',
        createTime: '2019-2-2',
        createBy: 'yxwei'
      }],
      dialogVisible: false,
      search: ''
    }
  },
  methods: {

    /**
       * 添加标签弹出框
       */
    add () {
      this.dialogVisible = true
    },

    /**
       * 点击取消、X号时提示
       */
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          setTimeout(() => {
            done()
          }, 1000)
        })
        .catch(_ => {
        })
    },

    /**
       * 保存
       */
    saveTag () {
      setTimeout(() => {
        this.dialogVisible = false
      }, 1000)
    },

    /**
       * 编辑标签
       * @param index
       * @param row
       */
    edit (index, row) {
      console.log(index, row)
    },

    /**
       * 删除标签
       * @param index
       * @param row
       */
    delete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped>

</style>
