<template>
  <router-link to="/">
    <img src="@/assets/logo.png" alt="logo">
  </router-link>
</template>

<script>
export default {
  name: 'StoreLogo'
}
</script>

<style scoped>
  img {
    width: 60px;
    height: 45px;
    transition: all 0.4s ease-in-out;
  }
  img:hover {
    transform: rotate(360deg);
  }
</style>
