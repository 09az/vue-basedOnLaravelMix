<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">
                        I'm an example component!
                    </div>
                </div>
            </div>
        </div>
        <test></test>
    </div>
</template>

<script>
    import test from './Test'

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components: {test}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .panel-body {
        border: 3px solid black;
    }
</style>
