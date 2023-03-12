<template>
  <div
    class="product__card-box"
    v-for="product in products"
    v-bind:key="product.id"
  >
    <div class="product__card-image">
      <img :src="product.thumbnail" :alt="product.brand">
    </div>
    <div class="product__card-rating">
      <Rating :max="5" :current="product.rating" />
    </div>
    <div class="product__card-info">
      <p>Model: <span>{{product.title}}</span></p>
      <p>Brand: <span>{{product.brand}}</span></p>
    </div>
    <div class="product__card-price">
      <p class="sale">${{product.price}}</p>
      <p>${{Math.floor(product.price - (product.price / 100 * product.discountPercentage))}}</p>
    </div>
    <button class="btn__card">
      <i class="pi pi-shopping-cart" style="font-size: 1rem; color: #0156FF; margin-right: 7px;" />
      Add To Cart
    </button>
    <button class="product__card-favorite">
      <i class="pi pi-heart" style="font-size: 1rem" />
    </button>
  </div>
</template>

<script>
import Rating from '@/components/Rating/Rating'
export default {
  name: 'ProductCard',
  components: {
    Rating
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.product__card-list {
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.14);
  padding: 10px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'image info'
    'rating price';
  position: relative;
  cursor: pointer;
  max-width: 75rem;
  max-height: 21rem;
  margin: 10px;
  transition: all 0.3s ease-in-out;
}
.product__card-list .product__card-image {
  grid-area: image;
  overflow: hidden;
}
.product__card-list .product__card-image img {
  object-fit: cover;
  width: 100%;
}
.product__card-list:hover .product__card-image img {
  scale: 1.1;
  transition: all 0.3s ease-in-out;
}
.product__card-list .product__card-rating {
  grid-area: rating;
  grid-column: 1 / span 2;
}
.product__card-list .product__card-info {
  grid-area: info;
  padding: 10px;
  margin-bottom: 55px;
}
.product__card-list .product__card-info p {
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
}
.product__card-list .product__card-info p span {
  font-size: 1rem;
  text-transform: capitalize;
}
@media (max-width: 850px) {
  .product__card-list .product__card-info p {
    font-size: 1rem;
  }
}
.product__card-list .product__card-price {
  grid-area: price;
  grid-row: 1 / span 2;
  margin-top: 80px;
  padding: 10px;
  text-align: right;
}
.product__card-list .btn__card {
  opacity: 1;
  grid-column: 2 / span 2;
  grid-row: 2 / span 3;
  margin-top: 0;
  margin-left: 15px;
}
.product__card-list .product__card-favorite {
  opacity: 1;
  bottom: 15px;
}
.product__card-box {
  width: 235px;
  height: 320px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.14);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: height 0.3s;
  position: relative;
  cursor: pointer;
  margin: 10px;
}
.product__card-box .product__card-image {
  display: flex;
  justify-content: center;
}
.product__card-box .product__card-image img {
  width: 75%;
  height: 150px;
  object-fit: contain;
}
.product__card-box .product__card-info p {
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
}
.product__card-info p span {
  font-weight: 800;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 20px;
}
.product__card-box .product__card-price {
  margin-top: 10px;
  text-align: left;
}
.product__card-price p {
  font-weight: 800;
}
.product__card-price .sale {
  font-weight: 500;
  text-decoration: line-through;
  opacity: 0.6;
}
.btn__card {
  background: none;
  outline: none;
  border: 2px solid #0156FF;
  border-radius: 50px;
  padding: 8px 15px;
  align-self: center;
  display: flex;
  opacity: 0;
  justify-content: center;
  width: 160px;
  margin-top: 15px;
  color: #0156FF;
  font-weight: 700;
  cursor: pointer;
}
.product__card-box:hover .btn__card {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}
.product__card-box:hover {
  height: 375px;
  transition: all 0.3s ease-in-out;
}
.product__card-favorite {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  opacity: 0;
  outline: none;
  background: none;
  cursor: pointer;
}
.product__card-box:hover .product__card-favorite {
  opacity: 1;
  transition: opacity 0.3s;
}
</style>
