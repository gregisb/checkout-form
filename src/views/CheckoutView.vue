<template>
  <div class="home">

    <Checkout />
  </div>
</template>

<script>
// @ is an alias to /src
import Checkout from '@/components/Checkout.vue'

export default {
  name: 'CheckoutView',
  components: {
    Checkout
  }
}
</script>
