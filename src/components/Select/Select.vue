<template>
  <select class="select" v-model="modelValue">
    <option disabled value="">Select a sort...</option>
    <option
      v-for="option in sortOptions"
      :key="option.value"
      :value="option.value"
    >
      {{ option.value }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectSort',
  data () {
    return {
      modelValue: '',
      sortOptions: [
        { value: 'Lowest Price' },
        { value: 'Highest Price' },
        { value: 'Lowest Rating' },
        { value: 'Highest Rating' }
      ]
    }
  }
}
</script>

<style scoped>
.select {
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  font-size: 1rem;
}
</style>
