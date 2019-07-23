<template>
  <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
    <div class="nano has-scrollbar">
      <div class="nano-content" tabindex="0" style="right: -17px;">
        <div class="logo"><span>Focus</span></div>
        <ul>
          <li class="label">文章中心</li>
          <li><a class="sidebar-sub-toggle"><i class="ti-home"></i> 文章管理 <span class="badge badge-primary">2</span>
            <span class="sidebar-collapse-icon ti-angle-down"></span></a>
            <ul>
              <li><a @click="changeRoute(1)">文章列表</a></li>
              <li><a @click="changeRoute(2)">添加文章</a></li>
            </ul>
          </li>
          <li><a href="app-event-calender.html"><i class="ti-calendar"></i> 添加分类 </a></li>
          <li><a href="app-email.html"><i class="ti-email"></i> 添加标签</a></li>
          <li><a class="sidebar-sub-toggle"><i class="ti-bar-chart-alt"></i>个人中心<span
            class="sidebar-collapse-icon ti-angle-down"></span></a>
            <ul>
              <li><a href="chart-flot.html">我的信息</a></li>
              <li><a href="chart-morris.html">个人风采</a></li>
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
  methods: {
    changeRoute (category) {
      let path = ''
      debugger
      switch (category) {
        case 1:
          path = '/blogList'
          break
        case 2:
          path = '/add'
          break
        default:
          path = '/'
      }
      this.$router.push({path: path})
    }
  }
}
</script>

<style scoped>

</style>
