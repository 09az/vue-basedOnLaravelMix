/*
 *定义API
 *比如多个组件请求接口，可以在这里统一定义。
 */

const data = require('./mock-data')
const LATENCY = 16

export function getAllMessages(cb) {

    //获取开发模式，可用于data_mock
    console.log(process.env.NODE_ENV)

    //因为不在组件内部，所以使用vue-resource不能用this.$http.get()这种方式
    //应该通过全局使用，即Vue.http.get()这种方式
    console.log(Vue.http.get)
    setTimeout(() => {
        cb(data)
    }, LATENCY)
}

export function createMessage({text, thread}, cb) {
    const timestamp = Date.now()
    const id = 'm_' + timestamp
    const message = {
        id,
        text,
        timestamp,
        threadID: thread.id,
        threadName: thread.name,
        authorName: 'Evan'
    }
    setTimeout(function () {
        cb(message)
    }, LATENCY)
}
