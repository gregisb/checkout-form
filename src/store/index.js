import { reactive } from "vue";

const state = reactive({
  reactCount: 10,
  vueCount: 0,
  angularCount: 0,
  payment: "Pix",
  comments: "",
});

const mutations = {
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
};

export default {
  state,
  mutations,
};
