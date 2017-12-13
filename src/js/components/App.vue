<template>
    <div id="app">
        <router-view/>
        <ExampleComponent/>
    </div>
</template>

<script>
    import ExampleComponent from './ExampleComponent'

    export default {
      mounted() {
        console.log('Component mounted.')
      },
      components: {ExampleComponent}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
