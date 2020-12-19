<template>
  <div>
    <HeroSection />
    <Nav class="sticky top-0" />
    <div class="sm:w-11/12 md:w-4/5 mx-auto">
      <h1 class="m-5">Featured Products</h1>
      <Featured class="mx-auto" :data="allProducts" />
    </div>
    <Ads class="mx-auto sm:m-10" />
    <NewsLetter class="mx-auto" />
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      products: [],
    }
  },
  methods: {
    ...mapActions(['getProducts']),
  },
  async asyncData({ store, error }) {
    try {
      const response = await fetch(`http://localhost:1337/products`)
      const products = await response.json()
      store.commit('setProducts', products)
    } catch (e) {
      error(e)
    }
  },
  computed: {
    ...mapGetters(['allProducts']),
  },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
