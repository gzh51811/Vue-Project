// 引入
import Vue from 'vue';
import Vuex,{Store} from 'vuex';



// 使用
Vue.use(Vuex);

// 核心概念
// 1. store ： 一个用于存储仓库
// 2. state ：状态（数据，相当于组件中的data）
// 3. getters:（理解为组件中的computed，只读）
// 4. mutations ：负责更改state中的数据（同步，理解为组件中的methods）
// 5. actions : 类似于 mutations，负责做异步操作
    // * actions用来操作mutations，mutations用来操作state


const store = new Store({
    // 公共数据
    state:{
        leixing:[
            {
                "icon": "https://p4.maiyaole.com/img/category/201710/1507438025375.png?35491",
                "id": 1001467,
                "name": "感冒"
            }, {
                "icon": "https://p1.maiyaole.com/img/category/201710/1507438667650.png?58659",
                "id": 1001468,
                "name": "哮喘"
            }, {
                "icon": "https://p1.maiyaole.com/img/category/201710/1507439200335.png?29757",
                "id": 1001469,
                "name": "慢性咽炎"
            }, {
                "icon": "https://p3.maiyaole.com/img/category/201710/1507444079339.png?5668",
                "id": 1001476,
                "name": "宝宝腹泻"
            }, {
                "icon": "https://p2.maiyaole.com/img/category/201710/1507443307062.png?36365",
                "id": 1001451,
                "name": "急性肠炎"
            }, {
                "icon": "https://p4.maiyaole.com/img/category/201803/1521446356089.png?69135",
                "id": 1001470,
                "name": "皮肤瘙痒"
            }, {
                "icon": "https://p1.maiyaole.com/img/category/201710/1507441370559.png?77632",
                "id": 1001471,
                "name": "便秘"
            }, {
                "icon": "https://p4.maiyaole.com/img/category/201708/1502183291108.png?69049",
                "id": 1001464,
                "name": "过敏性鼻炎"
            }, {
                "icon": "https://p4.maiyaole.com/img/category/201710/1507445077743.png?28936",
                "id": 1001477,
                "name": "脑梗塞"
            }, {
                "icon": "https://p2.maiyaole.com/img/category/201710/1507442035652.png?85450",
                "id": 1001472,
                "name": "口腔溃疡"
            }, {
                "icon": "https://p2.maiyaole.com/img/category/201708/1502188411957.png?26162",
                "id": 1001462,
                "name": "结膜炎"
            }, {
                "icon": "https://p4.maiyaole.com/img/category/201710/1507442439170.png?2742",
                "id": 1001473,
                "name": "脱发"
            }
        ],

    }
    // mutations:{
       
    // }
        
});

export default store;