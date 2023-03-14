<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap');
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
li {
  list-style: none;
}

</style>

<script>
import 'primeicons/primeicons.css'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
