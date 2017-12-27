<!--专辑列表-->
<template>
  <div class="list">

    <div class="list_item" :data-id="album.id" :data-pay="album.is_pay" v-for="album in albums">
      <div class="album_pic"><img :src="album.face2" alt=""></div>
      <div class="album_txt">
        <div class="album_info"><p class="album_title f5">{{ album.title }}</p>
          <div class="album_data"><p>已更新 {{ album.course_num }} 期</p></div>
        </div>
        <span class="album_pric bought">已购内容</span></div>
    </div>

  </div>
</template>

<script>
  export default {
    props:['albums']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
