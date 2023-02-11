<template>
  <div class="item">
    <img :src="teaVariety.img" :alt="teaVariety.title" />
    <p>{{ teaVariety.title }}</p>
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
