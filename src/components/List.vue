<template>
  <section id="blog-section" class="blog-section w100dt mb-50">
    <div class="container">
      <div class="row">
        <div class="col s12 m8 l8">
          <div class="blogs mb-30" v-for="(blog,index) in blogList" :key="index">
            <div class="card">
              <div class="card-image">
                <img :src="blog.imgSrc" alt="Image">
                <a class="btn-floating center-align cmn-bgcolor halfway-fab waves-effect waves-light">
                  <i class="icofont icofont-camera-alt"></i>
                </a>
              </div>
              <!-- /.card-image -->
              <div class="card-content w100dt">
                <p>
                  <a href="#" class="tag left w100dt l-blue mb-30">{{blog.category}}</a>
                </p>
                <a @click="getBlogDetail" class="card-title">{{blog.title}}</a>
                <p class="mb-30">{{blog.preview}}</p>
                <ul class="post-mate-time left">
                  <li>
                    <p class="hero left">By - <span class="l-blue">{{blog.author.userName}}</span>
                    </p>
                  </li>
                  <li>
                    <i class="icofont icofont-ui-calendar"></i> {{blog.author.date}}
                  </li>
                </ul>
                <ul class="post-mate right">
                  <li class="like">
                    <i class="icofont icofont-heart-alt"></i> {{blog.review.heart}}
                  </li>
                  <li class="comment">
                    <i class="icofont icofont-comment"></i> {{blog.review.comment}}
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

  export default {
    name: "blog-list",
    data() {
      return {
        blogList: [
          {
            imgSrc: "../../static/img/selfie.jpg",
            category: 'Lifestyle',
            title: '秋水共长天一色',
            preview: "豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。",
            author: {
              userName: 'yxwei',
              date: '2019-4-11'
            },
            review: {
              heart: 34,
              comment: 67
            }
          }, {
            imgSrc: "../../static/img/selfie.jpg",
            category: 'Lifestyle',
            title: '那年的我们正是青春年少时',
            preview: "有些人的人生一直在一个梦里打转，在现实里遗憾，在回忆里期盼，错过的那个人如同心口的朱砂痣一般越来越明艳越来越刺眼。",
            author: {
              userName: 'yxwei',
              date: '2019-6-11'
            },
            review: {
              heart: 256,
              comment: 100
            }
          }
        ]
      }
    },
    components: {
      'its-me': Me,
      'top-post': TopPost,
      'feature-post':FeaturePost
    },
    methods: {
      getBlogDetail() {
        this.$router.push('/detail');
      }
    }
  }
</script>

<style scoped>

</style>
