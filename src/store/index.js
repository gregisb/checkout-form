import { reactive, readonly } from "vue";

const state = reactive({
  comments: "",
  payment: "Pix",
  reactCount: 10,
  vueCount: 0,
  angularCount: 0,
});

const methods = {
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
  methods,
};

// // export const store = reactive({
// //     comments: "",
// //     payment: "Pix",
// //     reactCount: 0,
// //     vueCount: 0,
// //     angularCount: 0,

// //     reactIncrement() {
// //         this.reactCount += 1;
// //       },
// //       reactDecrement() {
// //         if (this.reactCount === 0) return;
// //         this.reactCount -= 1;
// //       },

// //       vueIncrement() {
// //         this.vueCount += 1;
// //       },
// //       vueDecrement() {
// //         if (this.vueCount === 0) return;
// //         this.vueCount -= 1;
// //       },

// //       angularIncrement() {
// //         this.angularCount += 1;
// //       },
// //       angularDecrement() {
// //         if (this.angularCount === 0) return;
// //         this.angularCount -= 1;
// //       },
// // })
