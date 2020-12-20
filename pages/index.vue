<template>
  <div>
    <HeroSection />
    <Nav class="sticky top-0" />
    <div class="sm:w-11/12 md:w-4/5 mx-auto">
      <h1 class="m-5 font-bold text-lg">Featured Products</h1>
      <Featured class="mx-auto" :data="featuredProducts" />
    </div>
    <Ads class="mx-auto sm:m-10" />
    <NewsLetter class="mx-auto" />
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
      const featuredProds = products.filter((prod) => prod.featured)
      store.commit('setFeaturedProducts', featuredProds)
    } catch (e) {
      error(e)
    }
  },
  data() {
    return {
      featuredProds: [],
    }
  },
  computed: {
    ...mapGetters(['featuredProducts']),
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
