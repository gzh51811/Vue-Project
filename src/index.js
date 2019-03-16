import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios'
// import store from './store'//引入VueX
import VUeResource from 'vue-resource';
Vue.prototype.$axios=axios;

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

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