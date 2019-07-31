<template>
  <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
    <div class="nano has-scrollbar">
      <div class="nano-content" tabindex="0" style="right: -17px;">
        <div class="logo"><span>XXX</span></div>
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
          <li :class="{'active':navIndex===constants.sliderNav.category}"><a @click="changeRoute(constants.sliderNav.category)" class="sidebar-sub-toggle"><i class="ti-direction"></i>添加类别</a></li>

          <!--<li><a class="sidebar-sub-toggle"><i class="ti-direction"></i> 类别管理-->
            <!--<span class="sidebar-collapse-icon ti-angle-down"></span></a>-->
            <!--<ul>-->
              <!--<li :class="{'active':navIndex===constants.sliderNav.categoryList}"><a @click="changeRoute(constants.sliderNav.categoryList)">类别列表</a></li>-->
              <!--<li :class="{'active':navIndex===constants.sliderNav.categoryAdd}"><a @click="changeRoute(constants.sliderNav.categoryAdd)">添加类别</a></li>-->
            <!--</ul>-->
          <!--</li>-->
          <li :class="{'active':navIndex===constants.sliderNav.tag}"><a @click="changeRoute(constants.sliderNav.tag)" class="sidebar-sub-toggle"><i class="ti-medall-alt"></i>添加标签</a></li>

          <li class="label">休闲一刻</li>
          <li :class="{'active':navIndex===constants.sliderNav.music}"><a @click="changeRoute(constants.sliderNav.music)" class="sidebar-sub-toggle"><i class="ti-headphone"></i> 音乐管理</a></li>
          <li><a class="sidebar-sub-toggle"><i class="ti-comments-smiley"></i> 每日一言
            <span class="sidebar-collapse-icon ti-angle-down"></span></a>
            <ul>
              <li :class="{'active':navIndex===constants.sliderNav.daliyTemperList}"><a @click="changeRoute(constants.sliderNav.daliyTemperList)">我的动态</a></li>
              <li :class="{'active':navIndex===constants.sliderNav.daliyTemperAdd}"><a @click="changeRoute(constants.sliderNav.daliyTemperAdd)" class="sidebar-sub-toggle"> 添加动态</a></li>
            </ul>
          <li class="label">个人管理</li>
          <li><a class="sidebar-sub-toggle"><i class="ti-user"></i>个人中心<span
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
        case nav.category:
          path = '/category'
          break
        case nav.tag:
          path = '/tag'
          break
        case nav.music:
          path = '/music'
          break
        case nav.daliyTemperList:
          path = '/daliyTemper/list'
          break
        case nav.daliyTemperAdd:
          path = '/daliyTemper/add'
          break
        default:
          path = '/'
      }
      this.$store.dispatch('setNavIndex', category).then(() => {
        this.$router.push({path: path})
      })
    }
  }
}
</script>

<style scoped>

</style>
