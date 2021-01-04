<template>
  <div
    class="sm:flex mx-auto items-center m-10 justify-center space-x-6 sm:space-x-20 m-3 sm:m-6 mx-6"
  >
    <div>
      <h1 class="text-lg m-7">Sign Up For NewsLetter</h1>
    </div>
    <div>
      <form @submit="handleSuscribe()">
        <input
          id=""
          v-model="email"
          class="p-2 m-3 sm:m-0 border border-solid border-t-0 border-l-0 border-r-0 border-b-1 outline-none border-black"
          type="email"
          name=""
          placeholder="email"
        />
        <button type="submit" class="button--grey">Subscribe</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsLetter',
  data() {
    return {
      email: '',
    }
  },
  methods: {
    async handleSuscribe(e) {
      e.preventDefault()
      this.$swal({
        title: 'Successful!',
        text: 'Thanks for Subscribing',
        icon: 'success',
        button: 'Ok',
      })
      await this.$strapi.$subscribers.create({ Email: this.email })
      // clear email input
      this.email = ''
    },
  },
}
</script>

<style></style>
