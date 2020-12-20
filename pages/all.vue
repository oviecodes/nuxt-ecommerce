<template>
  <div>
    <Nav class="sticky top-0" />
    <div class="sm:w-11/12 md:w-4/5 mx-auto">
      <h1 class="m-5 font-bold text-lg">Our Collection</h1>
      <div class="flex justify-center text-center mx-auto">
        <Featured :data="allProducts" />
      </div>
    </div>
    <Ads class="mx-auto sm:m-10" />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store, error }) {
    try {
      const response = await fetch(
        `https://enigmatic-peak-00809.herokuapp.com/products`
      )
      const products = await response.json()
      store.commit('setProducts', products)
    } catch (e) {
      error(e)
    }
  },
  data() {
    return {
      products: [],
    }
  },
  computed: {
    ...mapGetters(['allProducts']),
  },
}
</script>

<style scoped></style>
