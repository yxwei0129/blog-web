<template>
  <div class="col-lg-12 p-r-0 title-margin-right">
    <div class="page-header">
      <i class="el-icon-edit"></i> 类别列表:
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
            width="50">
          </el-table-column>
          <el-table-column
            prop="id"
            label="ID"
            align="center"
            width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="名称"
            width="100">
          </el-table-column>
          <el-table-column
            prop="description"
            align="center"
            label="描述"
            width="300">
          </el-table-column>
          <el-table-column
            prop="updateTime"
            label="更新日期"
            align="center"
            width="200">
          </el-table-column>
          <el-table-column
            prop="createTime"
            align="center"
            label="创建日期"
            width="200">
          </el-table-column>
          <el-table-column
            prop="createBy"
            label="创建人"
            width="200">
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                width="200"
                placeholder="输入类别名搜索"/>
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
        <el-button type="info" @click="add()" round style="float: left;margin-top: 20px">添加类别</el-button>
      </div>
      <el-divider></el-divider>
      <p><i class="ti-wallet"> 类别云:</i></p>
      <el-tag
        v-for="(item,index) in tableData"
        :key="item.id"
        style="margin-left:10px"
        :type="index%2===0 ? 'success':index%3===0?'danger':'waring'"
      >{{ item.name }}
      </el-tag>
    </div>
    <el-dialog
      title="请编辑类别"
      :visible.sync="dialogVisible"
      width="30%"
      :closeOnClickModal=false
      :before-close="handleClose">
      <el-form :model="model">
        <el-form-item>
          <p>
            类别ID
            <span class="text-danger">*</span> :
            <span class="ti-reload" @click="generateId()" style="float: right;margin: 10px 20px;cursor: pointer"></span>
          </p>
          <el-input autocomplete="off" :disabled="true" v-model="model.id"></el-input>
        </el-form-item>
        <el-form-item>
          <p>
            类别名称
            <span class="text-danger">*</span> :
          </p>
          <el-input autocomplete="off" v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item>
          <p>
            类别描述
            <span class="text-danger">*</span> :
          </p>
          <el-input autocomplete="off" v-model="model.description"></el-input>
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
import CategoryService from '../../api/category'

var generate = require('nanoid/generate')

export default {
  name: 'index',
  data () {
    return {
      dialogVisible: false,
      search: '',
      tableData: [],
      model: {
        id: '',
        name: '',
        description: ''
      }
    }
  },
  created () {
    this.getCategoryList()
  },
  methods: {

    /**
       * 获取类别
       */
    getCategoryList (callback) {
      let self = this
      CategoryService.getCategoryList().then(function (result) {
        if (result.status === 'SH-2001') {
          self.tableData = result.data
          callback && callback()
        } else {
          this.$message.error('获取标签失败!')
        }
      })
    },

    /**
       * 编辑
       * @param index
       * @param row
       */
    handleEdit (index, row) {
      this.dialogVisible = true
      this.model.id = this.tableData[index].id
      this.model.name = this.tableData[index].name
      this.model.description = this.tableData[index].description
    },

    /**
       * 删除标签
       * @param index
       * @param row
       */
    handleDelete (index, row) {
      this.$confirm('此操作将永久删除该类别, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let id = this.tableData[index].id
        CategoryService.deleteCategory(id).then((result) => {
          if (result.status === 'SH-2001') {
            this.$message.info('删除成功!')
            this.getCategoryList()
          } else {
            this.$message.error('删除失败!')
          }
        })
      })
    },

    /**
       * 添加类别弹出框
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
      CategoryService.saveCategory(this.model.id, this.model.name, this.model.description).then((result) => {
        if (result.status === 'SH-2001') {
          this.getCategoryList(() => {
            this.$message.info('保存成功!')
            this.dialogVisible = false
            this.model.id = ''
            this.model.name = ''
            this.model.description = ''
          })
        }
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
