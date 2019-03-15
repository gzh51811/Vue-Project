import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


//引入路由组件
import Home from '../pages/Home.vue';
import List from '../pages/List.vue';
import Cart from '../pages/Cart.vue';

const routes = [
    {name:'Home', path:'/home',component:Home},
    {name:'List', path:'/list',component:List},
    {name:'Cart', path:'/cart',component:Cart},
    {name:'Home', path:'/',component:Home}
    

]


let router = new VueRouter({
    routes

});
export default router;
