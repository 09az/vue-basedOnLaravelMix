<template>
    <div id="app">
        <router-view/>
        <FooterComponent/>
    </div>
</template>

<script>
    import FooterComponent from './FooterComponent.vue'

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components: {FooterComponent}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
