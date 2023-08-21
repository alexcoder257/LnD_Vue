<template>
  <div>
    <div>Dashboard</div>
    <div>Count:{{ count }}</div>
    <div>Double count:{{ doubleCount }}</div>
    <button @click="handleIncrese">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";

const { count, doubleCount } = storeToRefs(useCounterStore());
const { increment } = useCounterStore();
const handleIncrese = () => {
  increment();
};
</script>

<style></style>
