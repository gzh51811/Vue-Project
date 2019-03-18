import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios'
// import store from './store'//引入VueX
import VUeResource from 'vue-resource';
Vue.prototype.$axios=axios;

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// require styles
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VUeResource);
Vue.use(MintUI)

new Vue({
    el:'#app',
    // template:'<App/>'
    render(create){
        return create(App);
    },
    router,

    
   
});