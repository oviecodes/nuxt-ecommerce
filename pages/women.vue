<template>
  <div>
    <Nav class="sticky top-0" />
    <div class="sm:w-11/12 md:w-4/5 mx-auto">
      <h1 class="m-5">Women's collection</h1>
      <div class="flex justify-center text-center mx-auto">
        <Featured :data="womenProducts" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store }) {
    const response = await fetch(`http://localhost:1337/products`)
    const products = await response.json()
    const womenProds = products.filter(
      (product) => product.category.name === 'women'
    )
    store.commit('setWomenProducts', womenProds)
  },
  data() {
    return {
      womenProds: [],
    }
  },
  computed: {
    ...mapGetters(['womenProducts']),
  },
}
</script>

<style scoped></style>
