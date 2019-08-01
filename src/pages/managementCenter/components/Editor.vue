<template>
  <div>
    <div id="editor" ref="editor" style="text-align:left"></div>
  </div>
</template>

<script>
import WangEditor from 'wangeditor'
export default {
  name: 'editor',
  data () {
    return {
      editorContent: ''
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
