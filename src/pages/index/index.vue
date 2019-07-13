<template>
  <div>
    <section id="blog-slider-section" class="blog-slider-section w100dt mb-50">
      <div class="container">
        <top-slider></top-slider>
      </div>
    </section>
    <!--<daily-life></daily-life>-->
    <blog-list></blog-list>
  </div>
</template>

<script>
  import dailyLife from '../../components/DaliyLife'
  import blogList from '../../components/List'
  import topSlider from '../../components/Slider'

  export default {
    name: "index",
    components: {
      "daily-life": dailyLife,
      "blog-list": blogList,
      "top-slider": topSlider
    },
    created(){
      this.$store.dispatch('setNav', 0).then(() => {

      })
    }
  }
</script>

<style scoped>

</style>
