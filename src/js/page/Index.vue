<template>
    <div>
        <div class="contentBox">
            <div class="header">
                <!-- S 顶部banner图 -->
                <banner :banner-list="bannerList"></banner>
                <!-- E 顶部banner图 -->
                <div class="clear"></div>
                <!-- S 搜索栏 -->
                <router-link to="search" tag="div" class="search" exact>
                    <!-- <i class="search_icon"></i> -->
                    <img src="../../images/Search.png" alt="" class="search_icon">

                    <span>搜索资道</span>
                </router-link>
                <!-- E 搜索栏 -->
            </div>
            <!--日历-->
            <calendar></calendar>
            <div class="clear"></div>
            <!--专辑列表-->
            <albums :albums="albums"></albums>
            <div class="clear"></div>
            <!--专辑合集-->
            <album-collect></album-collect>
            <!--热门案例-->
            <hot-case :hot-case="hotCase"></hot-case>
            <!--最新案例-->
            <new-case></new-case>

            <div class="vacant"></div>

        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
  //引入Api文件
  import FooterComponent from '../components/Footer.vue';
  import Banner from '../components/Banner.vue';
  import Calendar from '../components/Calendar.vue';
  import Albums from '../components/Albums.vue';
  import AlbumCollect from '../components/AlbumCollect.vue';
  import HotCase from '../components/HotCase.vue';
  import NewCase from '../components/NewCase.vue';
  import config from '../config';

  export default {
    data() {
      return {
        bannerList:[],
        hotCase:[],
        newBgCourse:[],
        newIpoCourse:[],
        albums:[],
        topicList:[],
        zdrl:[]
      }
    },
    name: 'index',
    mounted() {
      this.$http.get(config.base_url + '/home/index').then(data => {
        let _data = data.body.data;
        this.bannerList  = _data.banner_list;
        this.hotCase = _data.hot_course;
        this.newIpoCourse = _data.new_ipo_course;
        this.newBgCourse = _data.new_bg_course;
        this.albums = _data.rec_album;
        this.topicList = _data.topicList;
        this.zdrl = _data.zdrl;
      })
    },
    components: {FooterComponent, Banner, Calendar, Albums, AlbumCollect, HotCase, NewCase}
  }
</script>
