<template>
  <div class="login">
    <div class="form-login">
      <div class="input-field">
        <label for="email">Email:</label>
        <input type="text" id="email" />
      </div>
      <div class="input-field">
        <label for="password">Password:</label>
        <input type="text" id="password" />
      </div>
      <button @click="handleSubmit">Submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const route = useRouter();
const handleSubmit = () => {
  route.push({ name: "Dashboard" });
};
</script>

<style lang="scss" scoped>
.login {
  .form-login {
    width: 400px;
    padding: 20px;
    .input-field {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    button {
      margin-top: 8px;
      border: none;
      padding: 4px 12px;
      border-radius: 4px;
      color: #fff;
      background-color: #333;
      font-weight: 500;
    }
  }
}
</style>
