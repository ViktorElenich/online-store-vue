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
import { collection, getDocs } from '@firebase/firestore'
import { db } from '@/firebase/config'
import ProductCard from '@/components/ProductCard/ProductCard.vue'
import Loader from '@/components/Loader/Loader.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import Filters from '@/components/Filters/Filters.vue'
@Options({
  components: {
    Filters,
    Sidebar,
    ProductCard,
    Loader
  },
  data () {
    return {
      products: [],
      isProductsLoading: false
    }
  },
  methods: {
    async fetchProducts () {
      try {
        this.isProductsLoading = true
        const querySnapshot = await getDocs(collection(db, 'products'))
        querySnapshot.forEach((doc) => {
          this.products.push(doc.data())
        })
        this.isProductsLoading = false
      } catch (e) {
        throw new Error(e as string)
      }
    }
  },
  mounted () {
    this.fetchProducts()
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
