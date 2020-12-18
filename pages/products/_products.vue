<template>
  <div>
    <Products :data="currentProduct" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentProduct: {},
    }
  },
  created() {
    const id = this.$route.params.products
    this.currentProduct = this.allProducts.find((product) => product.id === id)
  },
  computed: {
    ...mapGetters(['allProducts']),
  },
}
</script>

<style scoped></style>
