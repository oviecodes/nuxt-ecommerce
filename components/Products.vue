<template>
  <div>
    <h3>{{ data.name }}</h3>
    <img :src="`http://localhost:1337${data.Image[0].url}`" />
    <p>{{ data.price }}</p>
    <input v-model="cartItem.quantity" type="number" />
    <p>{{ data.description }}</p>
    <button
      class="button--green"
      @click="
        addItemToCart(cartItem)
        displayMessage()
      "
    >
      Add to Cart
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Products',
  props: ['data'],
  data() {
    return {
      cartItem: {
        name: this.data.name,
        url: this.data.Image[0].url,
        price: this.data.price,
        quantity: 1,
      },
    }
  },
  methods: {
    ...mapActions(['addItemToCart']),
    displayMessage() {
      this.$swal({
        title: 'Cart Updated!',
        text: `${this.data.name} was added to your cart!`,
        icon: 'success',
        button: 'Ok',
      })
    },
  },
}
</script>

<style scoped></style>
