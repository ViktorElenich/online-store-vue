<template>
  <div class="products__container">
    <ProductCard />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ProductCard from '@/components/ProductCard/ProductCard.vue'
@Options({
  components: {
    ProductCard
  }
})
export default class ProductsView extends Vue {}
</script>

<style scoped>
.products__container {
  width: 100%;
  height: calc(100vh - 80px);
  padding: 10px 40px;
}
</style>
