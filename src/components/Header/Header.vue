<template>
  <header>
    <Logo />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <div class='user'>
      <Search />
      <User />
    </div>
  </header>
</template>

<script>
import User from '@/components/User/User'
import Search from '@/components/Search/Search'
import Logo from '@/components/Logo/Logo'

export default {
  name: 'HeaderStore',
  components: {
    User,
    Search,
    Logo
  }
}
</script>

<style scoped>
header {
  width: 100%;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  box-shadow: 0 2px 12px 0 rgba(34,60,80,.2);
}
nav {
  display: flex;
  justify-content: center;
  gap: 15px;
}
nav a {
  font-weight: 800;
  color: #2c3e50;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
}
nav a:hover {
  opacity: 1;
}
nav a.router-link-exact-active {
  color: #0156FF;
  opacity: 1;
}
.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
</style>
