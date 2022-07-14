<template>
  <!-- <CheckoutForm /> -->
  <router-view />
</template>

<script>
import CheckoutForm from './components/CheckoutForm.vue'
export default {
  name: 'App',
  components: { CheckoutForm }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  background: #892be2;
}
</style>
