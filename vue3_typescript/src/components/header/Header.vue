<template>
  <div class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/login">Back To Login</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  gap: 32px;
  //   height: 32px;
  padding: 16px;
  background-color: #333;
  align-items: center;
  a {
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
  }
}
</style>
