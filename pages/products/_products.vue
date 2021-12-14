<template>
  <div>
    <Nav class="sticky top-0" />
    <h1 class="font-bold m-5 md:mx-10">
      {{ currentProduct.attributes.name }}
    </h1>
    <Products :data="currentProduct" />
    <Ads class="mx-auto sm:m-10" />
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, $http, route }) {
    const id = route.params.products
    // const currentProduct = await $strapi.$products.findOne(id)
    const response = await $http.$get(
      `http://localhost:1337/api/products/${id}?populate=*`
    )
    console.log(response)
    const { data: currentProduct } = response
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
