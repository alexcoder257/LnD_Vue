<template>
  <div>
    <div>Dashboard</div>
    <div>Count:{{ count }}</div>
    <div>Double count:{{ doubleCount }}</div>
    <button @click="handleIncrese">Increment</button>
    <button @click="deleteModalSample.open">Open Delete Modal</button>
    <button @click="addUserModalSample.open">Open Add User Modal</button>
    <modal :modalId="MODAL_ID.DELETE_JOB_STATUS" />
    <modal :modalId="MODAL_ID.ADD_USER" />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";
import DeleteModal from "@/components/modal/DeleteModal.vue";
import AddUserModal from "@/components/modal/AddUserModal.vue";
import Modal from "@/components/modal/Modal.vue";
import useModal from "@/hooks/useModal.ts";
import { MODAL_TYPE, MODAL_ID } from "@/constants/ModalConstant.ts";

const { count, doubleCount } = storeToRefs(useCounterStore());
const { increment } = useCounterStore();
const handleIncrese = () => {
  increment();
};

const deleteModalSample = useModal(MODAL_ID.DELETE_JOB_STATUS, DeleteModal, {
  type: MODAL_TYPE.DELETE,
  labelSubmit: "Delete",
  labelCancel: "Close",
  title: "Delete user modal",
  submit: () => {
    console.log("delete successfully");
  },
});

const addUserModalSample = useModal(MODAL_ID.ADD_USER, AddUserModal, {
  type: MODAL_TYPE.CREATE,
  labelSubmit: "Add",
  labelCancel: "Close",
  title: "Add user modal",
  submit: () => {
    console.log("add user successfully");
  },
});
</script>

<style></style>
