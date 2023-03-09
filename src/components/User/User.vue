<template>
  <router-link to='/auth' class='auth'>
    Log in
    <i class="pi pi-user" style="font-size: 1.5rem"></i>
  </router-link>
</template>

<script>
export default {
  name: 'AuthUser'
}
</script>

<style scoped>
  .auth {
    display: flex;
    justify-content: center;
    cursor: pointer;
    color: #2c3e50;
    font-weight: 800;
  }
  i {
    margin-left: 5px;
  }
</style>
