<template>
  <div class="star__rating">
    <span v-for="n in max" v-bind:key="n">&star;</span>
    <div
      class="star__rating-current"
      :style="{width: getRating + '%'}"
    >
      <span v-for="n in max" v-bind:key="n">&starf;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingStar',
  props: ['max', 'current'],
  computed: {
    getRating () {
      return (this.current / this.max) * 100
    }
  }
}
</script>

<style scoped>
.star__rating {
  color: gold;
  display: inline-block;
  font-size: 1.5em;
  position: relative;
  transform: translate(-6px);
  position: relative;
  left: 5px;
}
.star__rating-current {
  position: absolute;
  top: 0;
  overflow: hidden;
  white-space: nowrap;
}
</style>
