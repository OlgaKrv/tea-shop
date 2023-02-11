<template>
  <div class="wrapper_content wrapper-content--fixed">
    <section>
      <div class="container">
        <img class="w-60" :src="teaVariety.img" :alt="teaVariety.title" />
        <h1 class="m-0">{{ teaVariety.title }}</h1>
        <p>{{ teaVariety.description }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teaVariety: null,
    }
  },
  created() {
    const { id } = this.$route.params
    this.teaVariety = this.$store.getters.teaSample(id)
  },
}
</script>
