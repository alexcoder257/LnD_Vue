<template>
  <Teleport to="body">
    <Header />
    <main>
      <slot></slot>
    </main>
  </Teleport>
</template>

<script setup lang="ts">
import Header from "@/components/header/Header.vue";
</script>
