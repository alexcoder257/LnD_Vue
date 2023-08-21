<template>
  <div v-click-outside="closeModal">
    <div class="title">Delete modal</div>
    <button @click="handleDelete">Delete</button>
    <button @click="closeModal">Close</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  attrs: any;
  close: any;
}>();
const attrs = computed(() => props.attrs);

const closeModal = (): void => {
  props.close();
};

const handleDelete = () => {
  attrs.value.submit();
  props.close();
};
</script>
