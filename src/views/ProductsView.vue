<template>
  <div class="products__page">
    <Sidebar :products="products" />
    <Filters />
    <div class="products__container">
      <ProductCard
        :products="products"
        v-if="!isProductsLoading"
      />
      <Loader v-else />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ProductCard from '@/components/ProductCard/ProductCard.vue'
import Loader from '@/components/Loader/Loader.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import Filters from '@/components/Filters/Filters.vue'
import { mapActions, mapGetters } from 'vuex'
@Options({
  components: {
    Filters,
    Sidebar,
    ProductCard,
    Loader
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts'
    })
  },
  mounted () {
    this.fetchProducts()
  },
  computed: {
    ...mapGetters({
      products: 'products/products',
      isProductsLoading: 'products/isProductsLoading'
    })
  }
})
export default class ProductsView extends Vue {}

</script>

<style scoped>
.products__page {
  display: grid;
  grid-template-areas: 'sidebar filters' 'sidebar products';
  grid-template-columns: 16rem 1fr;
}
.products__container {
  width: 100%;
  padding: 10px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
  justify-items: center;
  grid-area: products;
}
</style>
