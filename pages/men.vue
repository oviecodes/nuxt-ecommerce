<template>
  <div>
    <Nav class="sticky top-0" />
    <div class="md:w-4/5 sm:w-11/12 mx-auto">
      <h1 class="m-5">Men's collection</h1>
      <div class="flex justify-center text-center mx-auto">
        <Featured :data="menProducts" />
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
    const menProds = products.filter(
      (product) => product.category.name === 'men'
    )
    store.commit('setMenProducts', menProds)
  },
  data() {
    return {
      menProds: [],
    }
  },
  computed: {
    ...mapGetters(['menProducts']),
  },
}
</script>

<style scoped></style>
