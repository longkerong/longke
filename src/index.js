import LoadingComponent from './components/Loading.vue'
const Loading = {
    install: function(Vue) {
        Vue.component('Loading', LoadingComponent)
    }
}
export default Loading