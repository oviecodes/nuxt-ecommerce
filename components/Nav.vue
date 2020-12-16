<template>
  <div class="navbar">
    <div class="nav-item-center space-x-4">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/">All</NuxtLink>
      <NuxtLink to="/mens">Men</NuxtLink>
      <NuxtLink to="/">Women</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/cart">Cart</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style scoped>
.navbar {
  background: chocolate;
}
</style>
