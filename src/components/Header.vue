<template>
  <header id="header-section" class="header-section w100dt navbar-fixed">
    <nav class="nav-extended main-nav">
      <div class="container">
        <div class="row">
          <div class="nav-wrapper w100dt">
            <!--logo--->
            <div class="logo left">
              <a href="index.html" class="brand-logo">
                <img src="../../static/img/logo.png" alt="brand-logo">
              </a>
            </div>

            <div>
              <a href="#" data-activates="mobile-demo" class="button-collapse">
                <i class="icofont icofont-navigation-menu"></i>
              </a>
              <ul id="nav-mobile" class="main-menu center-align hide-on-med-and-down">
                <li :class="{ 'active': nav===0 }"><a @click="changeNav(0)">首页</a></li>
                <li :class="{ 'active': nav===1 }"><a @click="changeNav(1)">点滴</a></li>
                <li :class="{ 'active': nav===2 }"><a @click="changeNav(2)">标签</a></li>
                <li :class="{ 'active': nav===3 }"><a @click="changeNav(3)">分类</a></li>
                <li :class="{ 'active': nav===4 }"><a @click="changeNav(4)">友链</a></li>
                <li :class="{ 'active': nav===5 }"><a @click="changeNav(5)">关于</a></li>
              </ul>
            </div>
            <a href="#" class="search-trigger right">
              <i class="icofont icofont-search"></i>
            </a>
            <!-- search -->
            <div id="myNav" class="overlay">
              <a href="javascript:void(0)" class="closebtn">&times;</a>
              <div class="overlay-content">
                <form>
                  <input type="text" name="search" placeholder="Search...">
                  <br>
                  <button class="waves-effect waves-light" type="submit" name="action">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "top-header",
    computed: {
      nav() {
        return this.$store.state.nav;
      }
    },
    methods: {
      /**
       * 切换导航
       * @param nav
       */
      changeNav(nav) {
        let path = '/';
        debugger
        switch (nav) {
          case 0:
            path = '/';
            break;
          // case 1:
          //   path = 'impression';
          //   break;
          // case 2:
          //   path = 'tag';
          //   break;
          // case 3:
          //   path = 'category';
          //   break;
          // case 4:
          //   path = 'friend';
          //   break;
          case 5:
            path = 'about';
            break;
          default :
            path = '/';
            nav = 0;
        }
        this.$store.dispatch('setNav', nav).then(() => {
          this.$router.push(path);
        })
      }
    }
  }
</script>

<style scoped>

</style>
