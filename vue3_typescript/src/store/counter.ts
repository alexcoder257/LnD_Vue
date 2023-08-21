import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0 as number,
  }),
  getters: {
    doubleCount: (state: any) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
