<template>
    <div id="app">
        <router-view/>
        <FooterComponent/>
    </div>
</template>

<script>
    import FooterComponent from './Footer'
    import Util from '../api/util'
    import Config from '../config'

    export default {
        created(){
            if (Util.checkLogin()){
                console.log(Util.getCookie('zd_h5_auth'));
            }else {
                location.href = Config.base_url + '/user/wechat-login';
                console.log('没登录')
            }
        },
        mounted() {
            console.log('APP mounted.')
        },
        components: {FooterComponent}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
