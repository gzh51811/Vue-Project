import Vue from 'vue';
import router from './router';
import axios from "axios";


import MintUI from 'mint-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css'
import { Checklist } from 'mint-ui';
import { Popup } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import store from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VUeResource from 'vue-resource';


Vue.prototype.$axios = axios;
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VUeResource);
Vue.use(MintUI)





Vue.component(Popup.name, Popup);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Checklist.name, Checklist);
Vue.use(ElementUI)






new Vue({
    el: '#app',
    // template:'<App/>'
    render(create) {
        return create('router-view');
    },
    router,

    // 将创建好的store注入到Vue根实例里
    store,

});