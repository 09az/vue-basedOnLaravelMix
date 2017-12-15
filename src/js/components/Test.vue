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
    </div>
</template>

<script>
    //引入文件
    import * as api from '../api'

    export default {
        name: 'test',
        mounted() {
            //调用接口
            api.getAllMessages(data => {
                console.log(data)
            })
//            console.log('Component mounted.')
        }
    }
</script>
