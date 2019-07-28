<template>
  <div class="col-lg-12 p-r-0 title-margin-right">
    <div class="page-header">
      <i class="el-icon-edit"></i> 标签列表:
      <div class="page-title table-responsive">
        <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%"
          max-height="350">
          <el-table-column
            fixed
            type="index"
            align="center"
            label="序号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="id"
            label="ID"
            align="center"
            width="200">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="标签"
            width="200">
          </el-table-column>
          <el-table-column
            prop="updateTime"
            align="center"
            label="更新日期"
            width="200">
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="添加日期"
            align="center"
            width="200">
          </el-table-column>
          <el-table-column
            prop="createBy"
            align="center"
            label="创建人"
            width="200">
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                width="150"
                placeholder="输入标签名搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="info" @click="add()" round style="float: left;margin-top: 20px">添加标签</el-button>
      </div>
      <el-divider></el-divider>
      <p><i class="ti-wallet"> 标签云:</i></p>
      <el-tag
        v-for="(item,index) in tableData"
        :key="item.id"
        size="medium"
        :type="index%2===0 ? 'success':index%3===0?'danger':'waring'"
      >{{ item.name }}
      </el-tag>
    </div>
    <el-dialog
      title="请编辑标签"
      :visible.sync="dialogVisible"
      width="30%"
      :closeOnClickModal=false
      :before-close="handleClose">
      <el-form :model="model">
        <el-form-item>
          <p>
            标签ID
            <span class="text-danger">*</span> :
            <span class="ti-reload" @click="generateId()" style="float: right;margin: 10px 20px;cursor: pointer"></span>
          </p>
          <el-input autocomplete="off" :disabled="true" v-model="model.id"></el-input>
        </el-form-item>
        <el-form-item>
          <p>
            标签名称
            <span class="text-danger">*</span> :
          </p>
          <el-input autocomplete="off" v-model="model.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click.stop="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="saveTag">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import TagService from '../../api/tag'

var generate = require('nanoid/generate')
export default {
  name: 'index',
  data () {
    return {
      tableData: [],
      dialogVisible: false,
      search: '',
      model: {
        id: '',
        name: ''
      }
    }
  },
  mounted () {
    this.getTagList()
  },
  methods: {

    /**
       * 查询所有tag
       */
    getTagList (callback) {
      let self = this
      TagService.getTagList().then(function (result) {
        if (result.status === 'SH-2001') {
          self.tableData = result.data
          callback && callback()
        } else {
          this.$message.error('获取标签失败!')
        }
      })
    },

    /**
       * 添加标签弹出框
       */
    add () {
      this.dialogVisible = true
      this.generateId()
    },

    /**
       * 点击取消、X号时提示
       */
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {
        })
    },

    /**
       * 保存
       */
    saveTag () {
      TagService.saveTag(this.model.id, this.model.name).then((result) => {
        if (result.status === 'SH-2001') {
          this.getTagList(() => {
            this.$message.info('保存成功!')
            this.dialogVisible = false
            this.model.id = ''
            this.model.name = ''
          })
        }
      })
    },

    /**
       * 编辑标签、填充数据
       * @param index
       * @param row
       */
    handleEdit (index, row) {
      this.dialogVisible = true
      this.model.id = this.tableData[index].id
      this.model.name = this.tableData[index].name
    },

    /**
       * 删除标签
       * @param index
       * @param row
       */
    handleDelete (index, row) {
      this.$confirm('此操作将永久删除该标签, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let id = this.tableData[index].id
        TagService.deleteTag(id).then((result) => {
          if (result.status === 'SH-2001') {
            this.$message.info('删除成功!')
            this.getTagList()
          } else {
            this.$message.error('删除失败!')
          }
        })
      })
    },

    /**
       * 创建标签id
       */
    generateId () {
      this.model.id = generate('1234567890', 8)
    }
  }
}
</script>

<style scoped>

</style>
