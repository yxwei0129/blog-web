<template>
  <div class="col-lg-12 p-r-0 title-margin-right">
    <div class="page-header">
      <div class="page-title">
        <i class="el-icon-edit"></i>请添加类别:
        <section id="main-content">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <div class="basic-form">
                    <form>
                      <div class="form-group">
                        <p>
                          ID
                          <span class="text-danger">*</span> :
                          <span class="ti-reload" @click="generateId()"
                                style="float: right;margin: 10px 20px;cursor: pointer"></span>
                        </p>
                        <el-input v-model="model.id">id</el-input>
                      </div>
                      <div class="form-group">
                        <p>
                          类别名称
                          <span class="text-danger">*</span> :
                        </p>
                        <el-input v-model="model.name"></el-input>
                      </div>
                      <div class="form-group">
                        <p>
                          描述
                          <span class="text-danger">*</span> :
                        </p>
                        <el-input v-model="model.description"></el-input>
                      </div>
                      <div class="form-group">
                        <p class="text-muted m-b-15 f-s-12">是否启用</p>
                        <el-switch
                          v-model="model.enabled"
                          active-color="#13ce66"
                          inactive-color="#ff4949">
                        </el-switch>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <el-button type="primary" style="float: right" @click="saveCategory()">保存<i
                class="el-icon-upload el-icon--right"></i></el-button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryService from '../../../api/category'

var generate = require('nanoid/generate')

export default {
  name: 'index',
  data () {
    return {
      model: {
        id: '',
        name: '文学',
        description: '记录生活中令我感动的每一段故事',
        enabled: true
      }
    }
  },
  created () {
    this.model = this.$route.query.model;
    this.generateId()
  },
  methods: {

    saveCategory () {
      CategoryService.saveCategory(this.model.id, this.model.name, this.model.description, this.model.enabled).then(function (result) {
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
