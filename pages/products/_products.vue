<template>
  <div>
    <Nav class="sticky top-0" />
    <h1 class="font-bold m-5 md:mx-10">{{ currentProduct.name }}</h1>
    <Products :data="currentProduct" />
    <Ads class="mx-auto sm:m-10" />
    <Footer />
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
