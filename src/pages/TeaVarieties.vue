<template>
  <div class="wrapper_content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="m-0">TeaVarieties</h1>
        <div class="item_wrapper">
          <shopItem
            v-for="teaVariety in shopList"
            :key="teaVariety.id"
            :teaVariety="teaVariety"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import shopItem from '../components/ShopItem.vue'

export default {
  components: { shopItem },
  data() {
    return {
      shopList: null,
    }
  },
  created() {
    this.shopList = this.$store.getters.shopList
  },
}
</script>

<style>
.item_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
