<template>
  <div>
    <Nav class="sticky top-0" />
    <div class="w-4/5 sm:w-1/2 mx-auto">
      <h1 class="m-5">Your Cart</h1>
    </div>
    <div
      v-for="item in getCart"
      :key="item.id"
      class="w-4/5 sm:w-1/2 flex items-center space-x-3 mx-auto shadow-lg m-5 p-3"
    >
      <div>
        <img class="h-24" :src="`http://localhost:1337${item.url}`" alt="" />
      </div>
      <div>
        <p>
          {{ item.name }}
        </p>
        <p>
          {{ item.quantity | formatQuantity }}
        </p>
        <p @click="deleteCartItem(item.id)">Delete</p>
      </div>
    </div>
    <div class="w-4/5 sm:w-1/2 mb-2 mx-auto">
      <p>
        <span>Total: </span> {{ formatCartTotal(getCartTotal) | formatPrice }}
      </p>
      <button
        v-show="getCartTotal > 0"
        class="button--green mx-auto"
        @click="handleSubmit"
      >
        checkout
      </button>
    </div>
    <Ads class="mx-auto sm:m-10" />
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
          cartTotal: this.getCartTotal.toFixed(2),
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
        this.$nuxt.context.error(result.error.message)
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
    formatCartTotal(num) {
      if (num > 0) {
        return num.toFixed()
      } else {
        return num
      }
    },
    ...mapActions(['deleteCartItem']),
  },
  filters: {
    formatPrice(price) {
      return `$${price}`
    },
    formatQuantity(num) {
      if (num === 1) {
        return `${num} unit`
      } else {
        return `${num} units`
      }
    },
  },
}
</script>

<style scoped></style>
