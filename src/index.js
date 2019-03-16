import Vue from 'vue';
import router from './router';
import axios from 'axios'

import VUeResource from 'vue-resource';
Vue.prototype.$axios=axios;
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VUeResource);
Vue.use(MintUI)

new Vue({
    el:'#app',
    // template:'<App/>'
    render(create){
        return create('router-view');
    },
    router,
    store

    
   
});