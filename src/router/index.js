import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


//引入路由组件
import App from '../App.vue';
import Content from '../pages/Content.vue';

import Home from '../pages/Home.vue';
import List from '../pages/List.vue';
import Cart from '../pages/Cart.vue';
import Mine from '../pages/Mine.vue';




const routes = [
    //第一层路由
     {name:'Content', path:'/content',component:Content},
     {name:'App', path:'/',component:App,children:[
        //第二层路由
       {name:'Home', path:'home',component:Home},
       {name:'List', path:'list',component:List },
       {name:'Cart', path:'cart',component:Cart},
       {name:'Mine', path:'mine',component:Mine},
       {name:'Home', path:'',component:Home}
    ]}
     
    

    
   

]


let router = new VueRouter({
    routes
});
export default router;
