import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


//引入路由组件
import Home from '../pages/Home.vue';
import List from '../pages/List.vue';
import Cart from '../pages/Cart.vue';
import Lmainr from '../components/Lmainr.vue';


const routes = [
    {name:'Home', path:'/home',component:Home},
    {name:'List', path:'/list',component:List,children: [
        //嵌套路由里面的的path后面的‘/’要去掉，注意注意了，大坑来的，别跳 
        {name:'Lmainr', path:'lmainr',component:Lmainr}
        ]},
    {name:'Cart', path:'/cart',component:Cart},
    {name:'Home', path:'/',component:Home},
   

]


let router = new VueRouter({
    routes
});
export default router;
