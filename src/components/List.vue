<template>
  <section id="blog-section" class="blog-section w100dt mb-50">
    <div class="container">
      <div class="row">
        <div class="col s12 m8 l8">
          <div class="blogs mb-30" v-for="(blog,index) in blogList" :key="index" v-if="blogList">
            <div class="card">
              <div class="card-image">
                <img src="/static/img/selfie.jpg" alt="Image">
                <a class="btn-floating center-align cmn-bgcolor halfway-fab waves-effect waves-light">
                  <i class="icofont icofont-camera-alt"></i>
                </a>
              </div>
              <!-- /.card-image -->
              <div class="card-content w100dt">
                <p>
                  <a href="#" class="tag left w100dt l-blue mb-30">{{blog.article_category}}</a>
                </p>
                <a @click="getBlogDetail" class="card-title">{{blog.article_title}}</a>
                <p class="mb-30">{{blog.article_title}}</p>
                <ul class="post-mate-time left">
                  <li>
                    <p class="hero left">By - <span class="l-blue">{{blog.article_author}}</span>
                    </p>
                  </li>
                  <li>
                    <i class="icofont icofont-ui-calendar"></i> {{blog.article_time}}
                  </li>
                </ul>
                <ul class="post-mate right">
                  <li class="like">
                    <i class="icofont icofont-heart-alt"></i> {{blog.article_like_count}}
                  </li>
                  <li class="comment">
                    <i class="icofont icofont-comment"></i> {{blog.article_comment_count}}
                  </li>
                </ul>
              </div>
              <!-- /.card-content -->
            </div>
          </div>
        </div>
        <!--博客右侧-->
        <div class="col s12 m4 l4">
          <its-me></its-me>
          <top-post></top-post>
          <feature-post></feature-post>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Me from '../components/Me'
  import TopPost from '../components/TopPost'
  import FeaturePost from '../components/FeaturedPost'
  import api from '../api'

  export default {
    name: "blog-list",
    data() {
      return {
        blogList: [

        ]
      }
    },
    created() {
      this.getData();
    },
    components: {
      'its-me': Me,
      'top-post': TopPost,
      'feature-post': FeaturePost
    },
    methods: {
      getData() {
        api.get_articleList('', (res) => {
          debugger
          this.blogList = res;
        })
      },
      getBlogDetail() {
        this.$router.push('/detail');
      }
    }
  }
</script>

<style scoped>

</style>
