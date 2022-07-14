<template>
  <div class="home">

    <CheckoutForm />
  </div>
</template>

<script>
// @ is an alias to /src
import CheckoutForm from '@/components/CheckoutForm.vue'

export default {
  name: 'HomeView',
  components: {
    CheckoutForm
  }
}
</script>
