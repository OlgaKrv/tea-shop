<template>
  <div class="wrapper_content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product_wrapper">
          <div class="product_slider">
            <carousel
              :perPage="1"
              :paginationEnable="true"
              paginationColor="#b3b3b3"
              paginationActiveColor="#494ce8"
            >
              <slide
                class="w-60"
                v-for="(slide, index) in teaVariety.gallery"
                :key="index"
              >
                <img class="w-80" :src="slide.img" :alt="slide.name" />
              </slide>
            </carousel>
          </div>
          <div class="product_content ml-10">
            <h1 class="title m-0">{{ teaVariety.title }}</h1>
            <p>{{ teaVariety.description }}</p>
          </div>
        </div>
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
