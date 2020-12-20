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
  async asyncData({ $strapi, store, error }) {
    try {
      const response = await $strapi.$products.find({ featured: true })
      store.commit('setFeaturedProducts', response)
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
