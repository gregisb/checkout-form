<template>
  <form>
    <div class="header">
      <h1>
        Formulário <br />
        para compra de <br />
        <span>Pacotes de adesivos</span>
      </h1>
    </div>
    <div>
      <h3 v-if="reactCount > 0 || vueCount > 0 || angularCount > 0">Parabéns! <br />A sua compra foi realizada!</h3>
      <h3 v-else>Você não escolheu nenhum adesivo. :(</h3>
    </div>
    <div class="formData">
      <p v-if="reactCount"><span id="tile">React:</span> {{ reactCount }} adesivos.</p>
      <p v-if="vueCount"><span id="tile">Vue:</span> : {{ vueCount }} adesivos.</p>
      <p v-if="angularCount"><span id="tile">Angular:</span> : {{ angularCount }} adesivos.</p>
    </div>

    <div class="totalPrice">
      <p><span id="tile">Valor total:</span>  R${{ totalPrice() }},00</p>
    </div>

    <div class="payment">
      <p><span id="tile">Forma de pagamento escolhida:</span>  {{ payment }}</p>
    </div>

    <div>
      <p><span id="tile">Observações:</span></p>
      <p>{{ comments }}</p>
    </div>
  </form>
</template>

<script>
import store from '../store/index';
import { computed } from 'vue';

export default {
  name: 'checkout',
  setup() {
    const reactCount = computed(() => store.state.reactCount);
    const vueCount = computed(() => store.state.vueCount);
    const angularCount = computed(() => store.state.angularCount);
    const totalPrice = computed(() => store.getters.totalPriceCalc);
    const payment = computed(() => store.state.payment);
    const comments = computed(() => store.state.comments);

    return {reactCount, vueCount, angularCount, payment, comments, totalPrice}
  }
  
}
</script>

<style scoped>
.header {
  height: 20vh;
  width: 100%;
  padding: 10px 40px;
  margin-top: -40px;
  margin-left: -40px;
  background-color: #2f3675;
  border-radius: 10px 10px 100% 50%;
}

h1 {
  color: rgb(180, 180, 180);
  font-size: 20px;
}

#tile {
  color: rgb(44, 44, 44);
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

.formData {
  display: flex;
  flex-direction: column;
}

p {
  color: rgb(116, 116, 116);
  display: inline-block;
  /* margin: 25px 0 15px; */
  font-size: .9rem;
  /* text-transform: uppercase; */
  letter-spacing: 1px;
  font-weight: bold;
}
</style>
