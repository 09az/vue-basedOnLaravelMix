<template>
    <div class="container">
        <ul>
            <router-link to="/" tag="li" class="icon" active-class="selected" exact>
                <router-link to="/" tag="i" class="icon" active-class="selected" exact></router-link>
                <span>首页</span>
            </router-link>
            <router-link to="/buy" tag="li" class="icon" active-class="selected" exact>
                <router-link to="/buy" tag="i" class="icon" active-class="selected" exact></router-link>
                <span>已购</span>
            </router-link>
            <router-link to="/my" tag="li" class="icon" active-class="selected" exact>
                <router-link to="/my" tag="i" class="icon" active-class="selected" exact></router-link>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Footer mounted.')
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .container{width:100%;border-top:1px solid #e8e8e8;background-color: #fff;box-shadow: inset 0 0 0 0 rgba(182,182,196,0.45);position: fixed;bottom: 0;z-index: 99}
    .container ul{width:80%;overflow: hidden;margin:0 auto;}
    .container ul>li{float: left;width:33.3%;text-align: center;margin-top:8px;}
    .container ul>li>i{display: inline-block;;width:0.6rem;height: 0.6rem;}
    .container ul>li:nth-child(1)>i{background:url(http://testh5.yxxy.tv/v1/images/index.png) no-repeat 0 0;background-size: contain;}
    .container ul>li:nth-child(2)>i{background:url(http://testh5.yxxy.tv/v1/images/my_bought.png) no-repeat 0 0;background-size: contain;}
    .container ul>li:nth-child(3)>i{background:url(http://testh5.yxxy.tv/v1/images/my.png) no-repeat 0 0;background-size: contain;}
    .container ul>li:nth-child(1)>.selected{background:url(http://testh5.yxxy.tv/v1/images/index2.png) no-repeat 0 0;background-size: contain;}
    .container ul>li:nth-child(2)>.selected{background:url(http://testh5.yxxy.tv/v1/images/my_bought2.png) no-repeat 0 0;background-size: contain;}
    .container ul>li:nth-child(3)>.selected{background:url(http://testh5.yxxy.tv/v1/images/my2.png) no-repeat 0 0;background-size: contain;}
    .container ul>li.selected>span{ color: #5F6D88;}
    .container ul>li>span{color:#C0C8D3}
    .vacant{height: 55px;width: 100%}
</style>
