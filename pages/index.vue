<template>
  <div>
    <HeroSection />
    <div class="flex justify-center text-center mx-auto">
      <Featured :data="allProducts" />
    </div>
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
  async asyncData({ store }) {
    const response = await fetch(`http://localhost:1337/products`)
    const products = await response.json()
    store.commit('setProducts', products)
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
