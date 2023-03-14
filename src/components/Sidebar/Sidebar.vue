<template>
  <div class="sidebar">
    <h2 class="sidebar__title">Products (354)</h2>
    <div
      :class="[showMenuCategory ? 'sidebar__category hide__category' : 'sidebar__category']"
      @click="showMenuCategories"
    >
        <div :class="[showMenuCategory ? 'sidebar__heading hide' : 'sidebar__heading']">
          Category
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-up"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
        <div
          class="sidebar__options"
          v-for="category in categories"
          v-bind:key="category"
        >
          <label class="check">
            <input type="checkbox" class="check__input">
            <span class="check__checkbox">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6.5L9 17.5L4 12.5" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <p class="check__text">{{category}}</p>
          </label>
        </div>
    </div>

    <div
      :class="[showMenuBrand ? 'sidebar__brand hide__brand' : 'sidebar__brand']"
    >
      <div
        :class="[showMenuBrand ? 'sidebar__heading hide' : 'sidebar__heading']"
        @click="showMenuBrands"
      >
        Brand
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-up"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </div>
      <div
        class="sidebar__options"
        v-for="brand in brands"
        v-bind:key="brand"
      >
        <label class="check">
          <input type="checkbox" class="check__input" checked>
          <span class="check__checkbox">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6.5L9 17.5L4 12.5" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <p class="check__text">{{brand}}</p>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarStore',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      categories: Array.from(new Set(this.products.map((item) => item.category))).sort(),
      brands: Array.from(new Set(this.products.map((item) => item.brand))).sort(),
      showMenuCategory: false,
      showMenuBrand: false
    }
  },
  methods: {
    showMenuCategories () {
      this.showMenuCategory = !this.showMenuCategory
    },
    showMenuBrands () {
      this.showMenuBrand = !this.showMenuBrand
    }
  }
}
</script>

<style scoped>
.sidebar {
  grid-area: sidebar;
  padding: 10px 10px 10px 40px;
}
.sidebar__title {
  font-size: 1.1rem;
}
.sidebar__category,
.sidebar__brand {
  overflow: hidden;
  transition: height 0.3s ease-in-out;
}
.sidebar__category:not(:first-of-type) .sidebar__heading,
.sidebar__brand:not(:first-of-type) .sidebar__heading {
  border-top: 1px solid #00000033;
  margin: 2rem 0 0.6rem;
}
.hide__category {
  height: 65px;
  transition: height 0.3s ease-in-out;
}
.hide__brand {
  height: 90px;
}
.sidebar__heading {
  font-size: 1.2rem;
  margin: 0.6rem 0;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: .1s linear;
}
.sidebar__heading svg {
  height: 2.2rem;
  transition: all 0.3s ease-in-out;
}
.hide svg {
  transform: rotateX(-180deg);
  transition: all 0.3s ease-in-out;
}
.sidebar__options {
  padding: 0 0.5rem;
}
.check {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  transition: .1s linear;
}
.check__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  opacity: 0;
}
.check__input:checked + .check__checkbox {
  background: #0156FF;
}
.check__checkbox {
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid #0156FF;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.check__checkbox svg {
  height: 2rem;
}
.check__text {
  font-size: 0.8rem;
  margin-left: 0.8rem;
  user-select: none;
  white-space: nowrap;
}
</style>
