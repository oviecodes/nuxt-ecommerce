<template>
  <div>
    <h1>Your Cart</h1>
    <p v-for="item in getCart" :key="item.id">
      {{ item.name }}
    </p>
    <p>{{ getCartTotal }}</p>
    <button class="button--green" @click="handleSubmit">checkout</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadStripe } from '@stripe/stripe-js'
export default {
  data() {
    return {
      dataItems: {},
      session: {},
      stripe: {},
      stripePromise: {},
    }
  },
  computed: {
    ...mapGetters(['getCart', 'getCartTotal']),
  },
  mounted() {
    this.displayMessage()
  },
  methods: {
    async handleSubmit(e) {
      //   console.log(JSON.stringify(this.dataItems))
      e.preventDefault()
      const response = await fetch(`http://localhost:1337/orders`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartDetail: this.getCart,
          cartTotal: this.getCartTotal,
        }),
      })
      // stripe logic
      const stripePromise = loadStripe(
        'pk_test_51Hyq4NFCEMnfAHVZvY5F9ejLYvE96SUzx5fR8leQTZaGyoOcj4gXhkmNd6OS30sOaVCIqGdEy0Wz6OLwdk8YV9x200gexCP8RC'
      )
      const session = await response.json()
      const stripe = await stripePromise
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      })
      console.log(await response.json())
      if (result.error) {
      }
    },
    // using vue-swal to display messages
    displayMessage() {
      if (this.$route.query.success) {
        this.$swal({
          title: 'Order placed!',
          text: 'You will receive an email confirmation.',
          icon: 'success',
          button: 'Ok',
        })
      } else if (this.$route.query.canceled) {
        this.$swal({
          title: 'Order canceled!',
          text: "continue to shop around and checkout when you're ready.",
          icon: 'warning',
          button: 'Ok',
        })
      }
    },
  },
}
</script>

<style></style>
