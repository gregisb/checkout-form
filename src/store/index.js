import { reactive } from "vue";

const state = reactive({
  reactCount: 0,
  vueCount: 0,
  angularCount: 0,
  reactPrice: 3,
  vuePrice: 3,
  angularPrice: 3,
  totalPrice: 0,
  payment: "Pix",
  comments: "",
});

const mutations = {
  reactIncrement() {
    state.reactCount += 1;
  },
  reactDecrement() {
    if (state.reactCount === 0) return;
    state.reactCount -= 1;
  },

  vueIncrement() {
    state.vueCount += 1;
  },
  vueDecrement() {
    if (state.vueCount === 0) return;
    state.vueCount -= 1;
  },

  angularIncrement() {
    state.angularCount += 1;
  },
  angularDecrement() {
    if (state.angularCount === 0) return;
    state.angularCount -= 1;
  },
  setPayment(value) {
    state.payment = value
    console.log(state.payment)
  },
  setComments(value) {
    state.comments = value
    console.log(state.comments)
  }
};

const getters = {
  reactPriceCalc() {
    return state.reactCount * state.reactPrice;
  },
  vuePriceCalc() {
    return state.vueCount * state.vuePrice;
  },
  angularPriceCalc() {
    return state.angularCount * state.angularPrice;
  },
  totalPriceCalc() {
    return (state.reactCount + state.vueCount + state.angularCount) * 3;
  }
};

export default {
  state,
  mutations,
  getters
};
