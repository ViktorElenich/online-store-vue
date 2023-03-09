<template>
  <div class='slider__container'>
    <i class='pi pi-arrow-circle-left arrow prev' style="font-size: 2rem" @click='prevSlide' />
    <i class='pi pi-arrow-circle-right arrow next' style="font-size: 2rem" @click='nextSlide' />
    <div
      v-for='slide in sliderData'
      :class='[slide.id === currentSlide ? "slide current" : "slide"]'
      v-bind:key='slide.id'
    >
      <img :src='slide.image' :alt='slide.heading' />
      <div class='content'>
        <h2>{{ slide.heading }}</h2>
        <p>{{ slide.desc }}</p>
        <hr />
        <router-link
          to="/products"
          class='btn__link'
        >
          Shop Now
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderImage',
  data () {
    return {
      sliderData: [
        {
          id: 0,
          image: 'https://i.ibb.co/CBGRLhG/bg-4.jpg',
          heading: 'Shoes Villa',
          desc: 'Up to 30% off on all onsale proucts.'
        },
        {
          id: 1,
          image: 'https://i.ibb.co/cDLBk5h/bg-1.jpg',
          heading: 'Women Fashion',
          desc: 'Up to 30% off on all onsale proucts.'
        },
        {
          id: 2,
          image: 'https://i.ibb.co/HXjD3V0/bg-2.jpg',
          heading: 'Men Fashion',
          desc: 'Up to 30% off on all onsale proucts.'
        },
        {
          id: 3,
          image: 'https://i.ibb.co/H2FRmtV/bg-3.jpg',
          heading: 'Awesome Gadgets',
          desc: 'Up to 30% off on all onsale proucts.'
        }
      ],
      currentSlide: 0
    }
  },
  methods: {
    nextSlide () {
      this.currentSlide = this.currentSlide === this.sliderData.length - 1 ? 0 : this.currentSlide + 1
    },
    prevSlide () {
      this.currentSlide = this.currentSlide === 0 ? this.sliderData.length - 1 : this.currentSlide - 1
    },
    autoChangeSlide () {
      setInterval(() => {
        this.nextSlide()
      }, 3000)
    }
  },
  beforeMount () {
    this.autoChangeSlide()
  }
}
</script>

<style scoped>
.slider__container {
  width: 100%;
  height: calc(100vh - 128px);
  position: relative;
  overflow: hidden;
}
.slide {
  opacity: 0;
  transition: all 0.5s ease;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide.current {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  transform: translateX(0);
}
.slide.current .content {
  opacity: 1;
}
.slide .content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  width: 50%;
  padding: 3rem;
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
  animation: slide-up 1s;
}
.content h2 {
  font-size: 3rem;
  text-align: center;
}
.content > * {
  color: #fff;
  margin-bottom: 1rem;
}
.arrow {
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  transition: all 0.2s ease-in-out;
}
.next {
  right: 1.5rem;
}
.prev {
  left: 1.5rem;
}
hr {
  height: 2px;
  background: #fff;
  width: 50%;
}
.btn__link {
  border: 2px solid #2c3e50;
  border-radius: 6px;
  padding: 0.8rem;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}
@keyframes slide-up {
  0% {
    visibility: visible;
    top: 65%;
  }
  100% {
    visibility: visible;
    top: 50%;
  }
}
</style>
