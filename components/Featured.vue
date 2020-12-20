<template>
  <div>
    <div
      class="sm:grid sm:grid-cols-3 md:grid-cols-3 gap-6 justify-center items-center"
    >
      <div
        v-for="(product, i) in data"
        :key="i"
        class="flex flex-col max-h-screen shadow-xl m-8 sm:m-2 md:m-4 justify-center items-center"
      >
        <div class="img-wrapper h-3/4 mx-auto max-h-screen">
          <img
            class="flex-shrink h-1/2"
            :src="`https://enigmatic-peak-00809.herokuapp.com${product.Image[0].url}`"
            alt=""
          />
        </div>

        <div>
          <p class="text-center m-3">
            {{ product.name }}
          </p>

          <NuxtLink :to="`/products/${product.id}`">
            <button class="button--green mb-4">View Product</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from '@nuxtjs/axios'
export default {
  name: 'Featured',
  props: ['data'],
}
</script>

<style scoped>
/* img {
  height: 12em;
} */
</style>
