<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="banner in bannerList">
                    <img :data-src="banner.img_url" :src="banner.img_url" class="swiper-lazy" :data-url="banner.skip_url">
                    <div class="swiper-lazy-preloader"></div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css';
  import Swiper from 'swiper';

  export default {
    props: ['bannerList'],
    updated() {
      console.log('mounted', this);
      let mySwiper = new Swiper ('.banner .swiper-container', {
        lazy: {
            lazy:true
        },
        autoplay:{
          autoplay:true
        },
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .swiper-container {
        width: 100%;
        height: 10rem;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #7c5e53;
        }
    }
</style>
