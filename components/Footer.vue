<template>
  <div
    class="flex flex-col mt-10 sm:mt-0 sm:flex-row sm:items-center bg-primary text-white space-x-5 p-5 py-8 md:space-x-20 md:p-20 font-light text-sm"
  >
    <p class="ml-5 font-bold">Unique Essense Store</p>
    <div class="m-2 mb-3">
      <NuxtLink to="/" class="m-2"><p>Home</p></NuxtLink>
      <NuxtLink to="/all" class="m-2"><p>All</p></NuxtLink>
      <NuxtLink to="men" class="m-2"><p>Men</p></NuxtLink>
      <NuxtLink to="women" class="m-2"><p>Women</p></NuxtLink>
    </div>

    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped></style>
