<template>
  <div class="user">
    <a class="favorite" href="#">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 5.11C20.3292 4.599 19.7228 4.19365 19.0554 3.91708C18.3879 3.64052 17.6725 3.49817 16.95 3.49817C16.2275 3.49817 15.5121 3.64052 14.8446 3.91708C14.1772 4.19365 13.5708 4.599 13.06 5.11L12 6.17L10.94 5.11C9.90831 4.07831 8.50903 3.49871 7.05 3.49871C5.59097 3.49871 4.19169 4.07831 3.16 5.11C2.12831 6.14169 1.54871 7.54097 1.54871 9C1.54871 10.459 2.12831 11.8583 3.16 12.89L4.22 13.95L12 21.73L19.78 13.95L20.84 12.89C21.351 12.3792 21.7564 11.7728 22.0329 11.1054C22.3095 10.4379 22.4518 9.72249 22.4518 9C22.4518 8.27751 22.3095 7.5621 22.0329 6.89464C21.7564 6.22719 21.351 5.62076 20.84 5.11V5.11Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </a>
    <router-link to="/cart" class="cart">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 2.5V6.5H3V20.5C3 21.0304 3.21071 21.5391 3.58579 21.9142C3.96086 22.2893 4.46957 22.5 5 22.5H19C19.5304 22.5 20.0391 22.2893 20.4142 21.9142C20.7893 21.5391 21 21.0304 21 20.5V6.5H17V2.5H7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 6.5H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </router-link>
    <router-link to='/auth' class='auth'>
      Log in
      <i class="pi pi-user" style="font-size: 1.5rem"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AuthUser'
}
</script>

<style scoped>
.user {
  display: flex;
}
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
