<template>
  <div>
    <Nav class="sticky top-0" />
    <h1 class="font-bold m-5 md:mx-10">
      {{ currentProduct.name }}
    </h1>
    <Products :data="currentProduct" />
    <Ads class="mx-auto sm:m-10" />
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, route }) {
    const id = route.params.products
    const currentProduct = await $strapi.$products.findOne(id)
    return { currentProduct }
  },
  data() {
    return {
      currentProduct: {},
    }
  },
}
</script>

<style scoped></style>
