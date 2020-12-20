<template>
  <div>
    <Nav class="sticky top-0" />
    <div class="md:w-4/5 sm:w-11/12 mx-auto">
      <h1 class="m-5 font-bold text-lg">Men's Collection</h1>
      <div class="flex justify-center text-center mx-auto">
        <Featured :data="menProducts" />
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
      const response = await $strapi.$products.find([['category.name', 'men']])
      store.commit('setMenProducts', response)
    } catch (e) {
      error(e)
    }
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
