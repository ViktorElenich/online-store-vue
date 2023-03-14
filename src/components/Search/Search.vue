<template>
  <div class="search-container">
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M21 21.5L16.65 17.15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <input class="search" type="text" placeholder="Search">
  </div>
</template>

<script>
export default {
  name: 'StoreSearch'
}
</script>

<style scoped>
.search-container {
  position: relative;
}
.search {
  width: 13.4rem;
  height: 2.4rem;
  border-radius: 100rem;
  background: #f5f5f5;
  border: 0;
  box-sizing: border-box;
  padding: .4rem 1.4rem .4rem 3.6rem;
  font-size: 1.2rem;
  transition: .1s linear;
  outline: none;
}
.search:hover {
  background: #ebebeb;
}
.search-container::-webkit-input-placeholder {
  color: #b3b3b3;
}
.search-container svg {
  position: absolute;
  left: 1.2rem;
  top: 48%;
  transform: translateY(-50%);
}
</style>
