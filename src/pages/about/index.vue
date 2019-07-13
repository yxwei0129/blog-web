<template>
  <div>
    <section id="breadcrumb-section" class="breadcrumb-section w100dt mb-30">
      <div class="container">
        <nav class="breadcrumb-nav w100dt">
          <div class="page-name hide-on-small-only left">
            <h4>关于</h4>
          </div>
          <div class="nav-wrapper right">
            <router-link to="/" class="breadcrumb">首页</router-link>
            <router-link to="/about" class="breadcrumb">关于</router-link>
          </div>
        </nav>
      </div>
    </section>
    <section id="contact-section" class="contact-section w100dt mb-50">
      <div class="container">
        <div id="map-section" class="map-section w100dt mb-50">
          <div id="google-map">
            <div id="googleMaps" class="google-map-container"></div>
          </div>
        </div>
        <div class="row">
          <div class="col m9 s12">
            <div class="sidebar-title left-align">
              <h2>联系我</h2>
            </div>
            <div class="contact-me">
              <div class="row">
                <div class="col m6 s12">
                  <p class="mb-30">如果您有任何问题，可以直接在此与我取得联系,我看到后会及时处理。茫茫人海，感谢每一个在此路过的人，海阔凭鱼跃，天高任鸟飞。</p>
                  <div class="contact-things">
                    <div class="c-icon">
                      <i class="icofont icofont-location-pin"></i>
                    </div>
                    <div class="c-text p-0">
                      <p>安徽省合肥市蜀山区</p>
                      <p>大蜀山</p>
                    </div>
                  </div>
                  <!-- /.contact-things -->
                  <div class="contact-things">
                    <div class="c-icon">
                      <i class="icofont icofont-phone"></i>
                    </div>
                    <div class="c-text">
                      <p>13635510292</p>
                    </div>
                  </div>
                  <!-- /.contact-things -->
                  <div class="contact-things">
                    <div class="c-icon">
                      <i class="icofont icofont-send-mail"></i>
                    </div>
                    <div class="c-text">
                      <p>supreme129@yeah.net</p>
                    </div>
                  </div>
                  <!-- /.contact-things -->
                </div>
                <!-- colsm6 -->

                <div class="col m6 s12">
                  <form class="contact-form" action="#">
                    <div class="contact-input">
                      <input id="first_name" type="text" class="validate">
                      <label for="first_name">姓名</label>
                    </div>
                    <!-- first_name -->

                    <div class="contact-input">
                      <input id="email" type="email" class="validate">
                      <label for="email" data-error="wrong" data-success="right">邮箱</label>
                    </div>
                    <!-- email -->

                    <div class="contact-input">
                      <input id="subject" type="text" class="validate">
                      <label for="subject">主题</label>
                    </div>
                    <!-- subject -->

                    <div class="contact-input">
                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                      <label for="textarea1">留下您想说的话</label>
                    </div>
                    <!-- textarea1 -->
                    <button type="button" class="waves-effect waves-light right">发送</button>
                  </form>
                  <!-- /.contact-form -->
                </div>
                <!-- colsm6 -->

              </div>
              <!-- row -->
            </div>
            <!-- /.contact-me -->
          </div>
          <!-- colm9 -->

          <div class="col m3 s12">
            <div class="sidebar-title left-align">
              <h2>社交</h2>
            </div>

            <ul class="social-link">
              <li>
                <a href="#" class="facebook">
                  <span class="s-icon left"><i class="icofont icofont-social-facebook"></i></span>
                  <span class="s-name">Facebook</span>
                  <span class="s-likes right">53K</span>
                </a>
              </li>
              <li>
                <a href="#" class="twitter">
                  <span class="s-icon left"><i class="icofont icofont-social-twitter"></i></span>
                  <span class="s-name">Twitter</span>
                  <span class="s-likes right">652</span>
                </a>
              </li>
              <li>
                <a href="#" class="google-plus">
                  <span class="s-icon left"><i class="icofont icofont-social-google-plus"></i></span>
                  <span class="s-name">Google+</span>
                  <span class="s-likes right">25K</span>
                </a>
              </li>
              <li>
                <a href="#" class="instagram">
                  <span class="s-icon left"><i class="icofont icofont-social-instagram"></i></span>
                  <span class="s-name">Instagram</span>
                  <span class="s-likes right">10K</span>
                </a>
              </li>
              <li>
                <a href="#" class="dribbble">
                  <span class="s-icon left"><i class="icofont icofont-social-dribbble"></i></span>
                  <span class="s-name">Dribbble</span>
                  <span class="s-likes right">543</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- colm3 -->
        </div>
        <!-- row -->

      </div>
      <!-- container -->
    </section>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>
