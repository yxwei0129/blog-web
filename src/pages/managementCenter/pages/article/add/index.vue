<template>
  <div class="col-lg-12 p-r-0 title-margin-right">
    <div class="page-header">
      <div class="page-title">
        <!--<i class="el-icon-edit"></i>请编辑文章-->
        <el-steps :active="active">
          <el-step title="分类" icon="el-icon-edit"></el-step>
          <el-step title="标签" icon="el-icon-upload"></el-step>
          <el-step title="编辑" icon="el-icon-picture"></el-step>
          <el-step title="预览" icon="el-icon-picture"></el-step>
        </el-steps>

        <div class="card card-height" style="height: 500px;overflow-y: auto">
          <div class="card-body">
            <template v-if="active===0">
              <div class="form-group row">
                <label style="text-align: center;margin: auto 0">分类 <span class="text-danger">*</span></label>
                <div class="col-lg-3">
                  <el-select v-model="article.category" placeholder="请选择分类">
                    <el-option
                      v-for="item in list.category"
                      :key="item.id"
                      :label="item.name"
                      :value="item.name">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="form-group row">
                <label style="text-align: center;margin: auto 0">标题 <span class="text-danger">*</span></label>
                <div class="col-lg-5">
                  <el-input v-model="article.title" placeholder="请输入内容"></el-input>
                </div>
              </div>
            </template>
            <template v-if="active===1">
              <el-transfer v-model="article.tag" :props="{ key: 'id',label: 'name'}" :titles="['TAG列表', '我的选择']"
                           :data="data"></el-transfer>
            </template>
            <template v-if="active===2">
              <the-editor style="margin-top: 20px"></the-editor>
              <br/>
            </template>
            <template v-if="active===3">
              <div v-html="editorContent"></div>
            </template>

          </div>
        </div>
        <template style="margin-top: 30px">
          <el-button type="primary" style="float: right" @click="next" v-if="active< 3">下一步<i
            class="el-icon--right"></i></el-button>
          <el-button type="primary" style="float: right;margin-right: 20px" @click="uploadArticle" v-if="active===3">上传<i
            class="el-icon--right el-icon-upload"></i></el-button>
          <el-button type="primary" style="float: right;margin-right: 20px" @click="up" v-if="active">上一步<i
            class="el-icon--right"></i></el-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from '../../../components/Editor'
import ArticleService from '../../../api/article'

export default {
  name: 'index',
  data () {
    return {
      list: '',
      active: 0,
      article: {
        category: '',
        title: '',
        tag: []
      },
      data: ''
    }
  },
  computed: {
    editorContent () {
      return this.$store.state.common.editorContent
    }
  },
  components: {
    'the-editor': Editor
  },
  created () {
    this.init()
  },
  methods: {

    /**
       * 初始化category、tag
       */
    init () {
      ArticleService.initTagAndCategoryData().then((result) => {
        if (result.status === 'SH-2001') {
          this.list = result.data
          this.initTagList(this.list.tag)
        } else {
          this.$message.error('初始化失败!')
        }
      })
    },

    /**
       * 初始化tag数据格式
       * @param tags
       */
    initTagList (tags) {
      const data = []
      for (let i = 0; i < tags.length; i++) {
        data.push({
          id: tags[i].id,
          name: tags[i].name
        })
      }
      this.data = data
    },

    /**
     * 上传文章
     */
    uploadArticle () {
      ArticleService.uploadArticle('eff4d2c5-ce65-4d68-8e03-8896bf557fbf', this.article.category, this.article.title, this.article.tag[0], this.editorContent).then((result) => {
        if (result.status === 'SH-2001') {
          this.$message.error('上传成功!')
        } else {
          this.$message.error('初始化失败!')
        }
      })
    },

    next () {
      if (!this.article.category || !this.article.title) {
        this.$message.warning('必填参数为空!')
        return
      }
      if (this.active === 1 && !this.article.tag.length) {
        this.$message.warning('必填参数为空!')
        return
      }
      if (this.active === 2 && !this.editorContent) {
        this.$message.warning('必填参数为空!')
        return
      }
      if (this.active++ > 2) this.active = 0
    },

    up () {
      if (this.active-- < 0) this.active = 0
    }
  }
}
</script>

<style scoped>
  /*.card-height {*/
  /*width: calc(100% - 100px);*/
  /*}*/
</style>
