<template>
  <section id="breadcrumb-section" class="breadcrumb-section w100dt mb-30">
    <div class="container">
      <nav class="breadcrumb-nav w100dt">
        <div class="page-name hide-on-small-only left">
          <h4>{{nav | navFilter}}</h4>
        </div>
        <div class="nav-wrapper right">
          <router-link to="/" class="breadcrumb">首页</router-link>
          <router-link to="/detail" class="breadcrumb active">{{nav | navFilter}}</router-link>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
  export default {
    name: "breadcrumb-nav",
    computed: {
      nav() {
        return this.$store.state.nav;
      }
    }
  }
</script>

<style scoped>

</style>
