<template>
  <div>
    <h1>Your Cart</h1>
    <p v-for="item in getCart" :key="item.id">
      {{ item.name }}
    </p>
    <p>{{ getCartTotal }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getCart', 'getCartTotal']),
  },
}
</script>

<style></style>
