<!--热门案例-->
<template>
  <div class="navBanner">
    <p class="f3">热门案例</p>
    <div class="swiper-container">

      <div class="swiper-wrapper">

        <div class="swiper-slide" v-for="course in hotCase">

          <div class="tag_box">
            <template v-for="tag in course.tag_list">
              <span v-if="tag.type == 6" class="banner_tag f1 region" :data-id="tag.tag_id"> {{ tag.name }} </span>
              <span v-else-if="tag.type == 5" class="banner_tag f1 industry" :data-id="tag.tag_id"> {{ tag.name }} </span>
              <span v-else class="banner_tag f1 otherTag" :data-id="tag.tag_id"> {{ tag.name }} </span>
            </template>
          </div>
          <img :data-num="course.course_number" class="swiper-lazy" :src="course.face">
          <div class="swiper-lazy-preloader"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css';
  import Swiper from 'swiper';

  export default {
    props:['hotCase'],
    mounted(){
      new Swiper ('.navBanner .swiper-container', {
        lazy: {
          lazy:true
        },
        autoplay:{
          autoplay:true
        },
        direction: 'horizontal',
        loop: true,
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
