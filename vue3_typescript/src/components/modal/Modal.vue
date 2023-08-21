<template>
  <Transition name="modal">
    <div v-if="showModal" class="modal-mask">
      <div class="modal-container">
        <component :is="component" :attrs="attrs" :close="close"></component>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { inject } from "vue";

const props = defineProps<{
  modalId: string;
}>();

const { showModal, component, attrs, close } = inject(props.modalId);
console.log(showModal, component, attrs, close);
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
