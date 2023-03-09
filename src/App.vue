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
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Poppins', sans-serif;
}
a {
  text-decoration: none;
}
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
}
</style>

<script>
import 'primeicons/primeicons.css'
import Logo from '@/components/Logo/Logo'
import Search from '@/components/Search/Search'
import User from '@/components/User/User'
export default {
  components: {
    User,
    Search,
    Logo
  }
}
</script>
