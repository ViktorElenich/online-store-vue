<template>
  <div class="filters__container">
    <button class="filters__btn">
      <span class="show">Show</span>
      <span class="hide">Hide</span>
      &nbsp;Filters
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black">
        <path d="M3 8L21 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 17H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17 5L17 11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 14L8 20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <Select />
  </div>
</template>

<script>
import Select from '@/components/Select/Select'
export default {
  name: 'FiltersStore',
  components: {
    Select
  }
}
</script>

<style scoped>
.filters__container {
  grid-area: filters;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px 40px;
}
.filters__btn {
  background: transparent;
  font-size: 1rem;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: .1s linear;
}
.filters__btn svg {
  margin-left: 5px;
}
</style>
