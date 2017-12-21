<template>
    <div class="container">
        <ul>
            <router-link to="/" tag="li" class="icon" active-class="selected" exact>
                <router-link to="/" tag="i" class="icon" active-class="selected" exact></router-link>
                <span style="color:#5F6D88 ">首页</span>
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
<style scoped>
</style>
