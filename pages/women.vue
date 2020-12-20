<template>
  <div>
    <Nav class="sticky top-0" />
    <div class="sm:w-11/12 md:w-4/5 mx-auto">
      <h1 class="m-5 font-bold text-lg">Women's Collection</h1>
      <div class="flex justify-center text-center mx-auto">
        <Featured :data="womenProducts" />
      </div>
    </div>
    <Ads class="mx-auto sm:m-10" />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ $strapi, store, error }) {
    try {
      const response = await $strapi.$products.find([
        ['category.name', 'women'],
      ])
      store.commit('setWomenProducts', response)
    } catch (e) {
      error(e)
    }
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
