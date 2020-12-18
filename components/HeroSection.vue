<template>
  <div
    class="hero relative max-h-screen md:min-h-screen flex flex-col justify-center items-center text-center mx-auto bg-cover"
  >
    <div class="relative m-10">
      <div class="z-10 relative">
        <h1 class="title text-white m-3 font-bold">Unique Essence</h1>
        <p class="text-white subtitle">...your one stop shop for all</p>
      </div>
      <div class="circle absolute z-0 right-0 top-0"></div>
      <div class="links mt-10">
        <NuxtLink to="/" class="button--hero bg-button relative z-10">
          View Collections
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.hero {
  background-color: #9c7474dc;
}

.circle {
  width: 10em;
  height: 10em;
  border-radius: 5em;
  background: #b8738d;
}

.title {
  font-family: 'Nunito';
  display: block;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 1px;
  line-height: 1em;
}

.subtitle {
  font-weight: 100;
  word-spacing: 2px;
}
</style>
