<template>
  <div class="navbar flex text-white relative">
    <div class="nav-item-center flex space-x-6 sm:space-x-20 p-5 mx-auto">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/">All</NuxtLink>
      <NuxtLink to="/men">Men</NuxtLink>
      <NuxtLink to="/women">Women</NuxtLink>
    </div>
    <div class="cart fixed bottom-0 right-0 shadow-md m-3">
      <p class="p-1 cartCount text-xs absolute top-0 right-0">
        {{ getCart.length }}
      </p>
      <NuxtLink to="/cart">
        <p class="pt-3 px-2">Cart</p>
      </NuxtLink>
    </div>
    <!-- <div class="ham-menu shadow-md fixed bottom-0 right-0 m-3 sm:hidden">
      <p class="text-center pt-3">menu</p>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Nav',
  computed: {
    ...mapGetters(['getCart']),
  },
}
</script>

<style scoped>
.ham-menu {
  background-color: #000;
  width: 3em;
  height: 3em;
  border-radius: 1.5em;
}
.cart {
  background-color: rgb(163, 87, 129);
  width: 3em;
  height: 3em;
  border-radius: 1.5em;
}
.navbar {
  background-color: rgb(24, 20, 22);
}
.cartCount {
  background: #000;
  border-radius: 30%;
}
</style>
