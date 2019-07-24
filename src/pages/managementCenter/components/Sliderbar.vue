<template>
  <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
    <div class="nano has-scrollbar">
      <div class="nano-content" tabindex="0" style="right: -17px;">
        <div class="logo"><span>欣然之居</span></div>
        <ul>
          <li class="label">文章中心</li>
          <li><a class="sidebar-sub-toggle"><i class="ti-home"></i> 文章管理
            <span class="sidebar-collapse-icon ti-angle-down"></span></a>
            <ul>
              <li :class="{'active': navIndex===constants.sliderNav.articleList}"><a @click="changeRoute(constants.sliderNav.articleList)">文章列表</a></li>
              <li :class="{'active':navIndex===constants.sliderNav.articleAdd}"><a @click="changeRoute(constants.sliderNav.articleAdd)">添加文章</a></li>
            </ul>
          </li>
          <li class="label">分类</li>
          <li><a class="sidebar-sub-toggle"><i class="ti-home"></i> 类别管理
            <span class="sidebar-collapse-icon ti-angle-down"></span></a>
            <ul>
              <li :class="{'active':navIndex===constants.sliderNav.categoryAdd}"><a @click="changeRoute(constants.sliderNav.categoryAdd)">类别列表</a></li>
              <li :class="{'active':navIndex===constants.sliderNav.categoryList}"><a @click="changeRoute(constants.sliderNav.categoryList)">添加类别</a></li>
            </ul>
          </li>
          <li><a @click="changeRoute(constants.sliderNav.tag)">添加标签</a></li>
          <li><a class="sidebar-sub-toggle"><i class="ti-bar-chart-alt"></i>个人中心<span
            class="sidebar-collapse-icon ti-angle-down"></span></a>
            <ul>
              <li><a @click="changeRoute(constants.sliderNav.personalInfo)">我的信息</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="nano-pane">
        <div class="nano-slider" style="height: 155px; transform: translate(0px, 0px);"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sliderbar',
  computed: {
    navIndex () {
      return this.$store.state.common.navIndex
    }
  },
  methods: {
    changeRoute (category) {
      let path = ''
      let nav = window.constants.sliderNav
      switch (category) {
        case nav.articleList:
          path = '/article/add'
          break
        case nav.articleAdd:
          path = '/article/list'
          break
        case nav.categoryAdd:
          path = '/category/add'
          break
        case nav.categoryList:
          path = '/category/list'
          break
        case nav.tag:
          path = '/tag'
          break
        default:
          path = '/'
      }
      debugger
      this.$store.dispatch('setNavIndex', category).then(() => {
        this.$router.push({path: path})
      })
    }
  }
}
</script>

<style scoped>

</style>
