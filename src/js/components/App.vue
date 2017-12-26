<template>
    <div id="app">
        <router-view/>
        <FooterComponent/>
    </div>
</template>

<script>
    import FooterComponent from './Footer'
    import cookie from 'cookie'
    import Config from '../config'

    export default {
        created(){
            let cookies = cookie.parse(document.cookie);
            if (cookies.zd_h5_key && cookies.zd_h5_auth){
                console.log(cookies);
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
