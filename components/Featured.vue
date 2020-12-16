<template>
  <div class="container">
    <h3>Featured</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
      <div v-for="(product, i) in data" :key="i" class="par">
        <div class="h-1/2">
          <img
            class="mx-auto object-fill"
            :src="`http://localhost:1337${product.Image[0].url}`"
            alt=""
          />
        </div>

        <p>
          {{ product.name }}
        </p>
        <NuxtLink :to="`/products/${product.id}`"> View Product </NuxtLink>
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
.par {
  height: 200px;
}
</style>
