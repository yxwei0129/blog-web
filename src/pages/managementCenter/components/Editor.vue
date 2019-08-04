<template>
  <div>
    <div id="editor" ref="editor" style="text-align:left"></div>
  </div>
</template>

<script>
import WangEditor from 'wangeditor'
export default {
  name: 'editor',
  computed: {
    editorContent () {
      return this.$store.state.common.editorContent
    }
  },
  mounted () {
    let editor = new WangEditor(this.$refs.editor)
    editor.customConfig.onchange = (html) => {
      this.$store.dispatch('setEditorContent', html)
    }
    editor.create()
    window.fullscreen.init('#editor')
    editor.txt.html(this.editorContent)
  }
}
</script>

<style scoped>
</style>
