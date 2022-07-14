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
      <h3>Quais adesivos você deseja?</h3>
    </div>
    <div class="frameworks">
      <table>
        <tr>
          <td><label class="framework">React</label></td>
          <td>
            <button class="countBtn" @click.prevent="reactDecrement">-</button>
          </td>
          <td>
            <p class="counter">{{ reactCount }}</p>
          </td>
          <td>
            <button class="countBtn" @click.prevent="reactIncrement">+</button>
          </td>
        </tr>

        <tr>
          <td><label class="framework">Vue</label></td>
          <td>
            <button class="countBtn" @click.prevent="vueDecrement">-</button>
          </td>
          <td>
            <p class="counter">{{ vueCount }}</p>
          </td>
          <td>
            <button class="countBtn" @click.prevent="vueIncrement">+</button>
          </td>
        </tr>

        <tr>
          <td><label class="framework">Angular</label></td>
          <td>
            <button class="countBtn" @click.prevent="angularDecrement">
              -
            </button>
          </td>
          <td>
            <p class="counter">{{ angularCount }}</p>
          </td>
          <td>
            <button class="countBtn" @click.prevent="angularIncrement">
              +
            </button>
          </td>
        </tr>
      </table>
    </div>

 

    <label>Forma de pagamento</label>
    <select v-model="payment">
      <option value="Boleto">Boleto</option>
      <option value="Cartão de Crédito">Cartão de Crédito</option>
      <option value="Pix">Pix</option>
    </select>

    <label>Obersvações:</label>
    <input class="comments" type="text" v-model="comments" />

       
    <div class="submit">
      <router-link to="/checkout"><button>Enviar</button></router-link>
    </div> 
  </form>

</template>

<script>
export default {
  name: "CheckoutForm",
  data() {
    return {
      comments: "",
      payment: "Pix",
      reactCount: 0,
      vueCount: 0,
      angularCount: 0,
    //   store
    };
  },
  methods: {
    reactIncrement() {
      this.reactCount += 1;
    },
    reactDecrement() {
      if (this.reactCount === 0) return;
      this.reactCount -= 1;
    },

    vueIncrement() {
      this.vueCount += 1;
    },
    vueDecrement() {
      if (this.vueCount === 0) return;
      this.vueCount -= 1;
    },

    angularIncrement() {
      this.angularCount += 1;
    },
    angularDecrement() {
      if (this.angularCount === 0) return;
      this.angularCount -= 1;
    },
  },
};
</script>

<style>
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

span {
  color: white;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: rgb(116, 116, 116);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 6px 0 0;
  position: relative;
  top: 2px;
}

.frameworks {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.framework {
  padding-right: 10px;
}

.countBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2f3675;
  color: white;
  width: 20px;
  height: 20px;

  margin-top: 10px;

  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.counter {
  color: rgb(116, 116, 116);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 1em;

  font-weight: bold;
}

button {
  background: #2f3675;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  transition: ease 0.5s;
  cursor: pointer;
}

button:hover {
  background-color: #2f3675b6;
}
.submit {
  text-align: right;
}
</style>
