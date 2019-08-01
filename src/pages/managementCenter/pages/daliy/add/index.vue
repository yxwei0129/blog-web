<template>
  <div>
    <i class="el-icon-edit"></i>请编辑动态
    <the-editor style="margin-top: 20px" ref="dailyEditor"></the-editor>
    <br/>
    <el-button type="primary" style="float: right" @click="saveDaily()">上传<i
      class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</template>

<script>
import Editor from '../../../components/Editor'
import DailyService from '../../../api/daily'

export default {
  name: 'index',
  data () {
    return {
      textarea: ''
    }
  },
  components: {
    'the-editor': Editor
  },
  methods: {
    saveDaily () {
      let detail = this.$refs.dailyEditor.editorContent
      if (!detail) {
        this.$message.error('动态内容为空!')
        return
      }
      this.$confirm('确定发表该动态, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        DailyService.saveDailyDetail(detail).then((result) => {
          if (result.status === 'SH-2001') {
            this.$store.dispatch('setNavIndex', window.constants.sliderNav.daliyList).then(() => {
              this.$router.push({path: '/daliy/list'})
            })
          }
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
