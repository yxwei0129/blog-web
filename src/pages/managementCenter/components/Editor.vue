<template>
  <div>
    <div id="editor" ref="editor" style="text-align:left"></div>
    <button v-on:click="getContent">查看内容</button>
  </div>
</template>

<script>
import WangEditor from 'wangeditor'
// require('../../../../static/js/wangEditor-fullscreen-plugin')
export default {
  name: 'editor',
  data () {
    return {
      editorContent: ''
    }
  },
  methods: {
    getContent: function () {
      alert(this.editorContent)
    }
  },
  mounted () {
    let editor = new WangEditor(this.$refs.editor)
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
    window.fullscreen.init('#editor')
  }
}
</script>

<style scoped>
</style>
