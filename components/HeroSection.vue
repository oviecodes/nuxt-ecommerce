<template>
  <div
    class="hero relative min-h-screen flex flex-col justify-center items-center text-center mx-auto bg-cover"
  >
    <div class="relative">
      <h1 class="title text-white">Unique Essence</h1>
      <div class="circle"></div>
      <div class="links">
        <NuxtLink to="/" class="button--hero bg-button">
          View Collections
        </NuxtLink>
      </div>
    </div>
    <div class="absolute inset-x-0 bottom-0">
      <Nav class="buttom-0 top-10" />
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
  width: 100px;
  height: 100px;
  border-radius: 10%;
  background: green;
  display: inline;
}

.title {
  font-family: 'Nunito';
  /* display: block; */
  font-weight: 300;
  font-size: 80px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
