<template>
  <div class="item">
    <img class="w-44" :src="teaVariety.img" :alt="teaVariety.title" />
    <router-link :to="/tea-varieties/ + teaVariety.id" class="link">{{
      teaVariety.title
    }}</router-link>
    <p>{{ teaVariety.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    teaVariety: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.item {
  max-width: 48%;
  text-align: center;
}
p:nth-child(2) {
  font-size: 22px;
}
</style>
