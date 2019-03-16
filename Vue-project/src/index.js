import Vue from 'vue';
import App from './App';
import router from './router';
<<<<<<< HEAD:Vue-project/src/index.js
import axios from 'axios'
// import store from './store'//引入VueX
import VUeResource from 'vue-resource';
Vue.prototype.$axios=axios;
=======

 import store from './store'//引入VueX
>>>>>>> 3e382ef1dd99aef53ae97b1b52e8212f21686d8b:src/index.js

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

    // 将创建好的store注入到Vue根实例里
    store
   
});