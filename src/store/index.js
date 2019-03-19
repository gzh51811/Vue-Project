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
        buwei:['热门类目'],
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
        nanke:[
            {icon: "https://p3.maiyaole.com/img/category/201707/1499406720493.png?6605",
            id: 1001278,
            name: "阳痿&早泄"
            },
            {icon: "https://p3.maiyaole.com/img/category/201707/1499406727381.png?71744",
            id: 1001279,
            name: "前列腺炎"
            },
            {icon: "https://p1.maiyaole.com/img/category/201707/1499406749817.png?41657",
            id: 1001282,
            name: "肾病"
            },
            {icon: "https://p2.maiyaole.com/img/category/201707/1499406777035.png?37084",
            id: 1001283,
            name: "补肾"
            },
            {icon: "https://p1.maiyaole.com/img/category/201707/1499406743332.png?22409",
            id: 1001281,
            name: "泌尿系统疾病"
            },
            {icon: "https://p2.maiyaole.com/img/category/201707/1499406735806.png?3013",
            id: 1001280,
            name: "男性不育症"
            }
        ],
        shenjing:[
            {icon: "https://p3.maiyaole.com/img/category/201707/1499406939759.png?40250",
            id: 1001289,
            name: "帕金森"
            },
            {icon: "https://p4.maiyaole.com/img/category/201707/1499406934561.png?47576",
            id: 1001288,
            name: "精神分裂症"
            },
            {icon: "https://p1.maiyaole.com/img/category/201707/1499406929133.png?10914",
            id: 1001287,
            name: "癫痫"
            },
            {icon: "https://p3.maiyaole.com/img/category/201707/1499406923747.png?57616",
            id: 1001286,
            name: "抑郁症"
            },
            {icon: "https://p4.maiyaole.com/img/category/201707/1499407010962.png?188",
            id: 1001297,
            name: "运动神经元病"
            },
            {icon: "https://p2.maiyaole.com/img/category/201707/1499406978721.png?38938",
            id: 1001293,
            name: "神经性疼痛"
            }

        ],
        ganmao:[
            {
                img:"https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg",
                names:"三九/999 感冒灵颗粒 10g*9袋 感冒发烧 ",
                price: 12.3,
                userGrade: 16561 //好评数
            },
             {
                img: "https://p1.maiyaole.com/img/item/201811/09/200_2018110917355088.jpg",
                names: "白云山 板蓝根颗粒 10g*20包 感冒发烧",
                price: 13.8,
                userGrade: 1866 //好评数
            },{
                img: "https://p1.maiyaole.com/img/item/201901/09/200_20190109133615576.jpg",
                names: "达菲 磷酸奥司他韦胶囊 75mg*10粒 甲型流感 乙型流感 病毒性感冒发烧",
                price: 248,
                userGrade: 16544 //好评数
            },
             {
                img: "https://p4.maiyaole.com/img/item/201808/10/200_20180810102144196.jpg",
                names: "同贝/tonpe 小儿豉翘清热颗粒 2g*6袋",
                price: 25.7,
                userGrade: 1355 //好评数
            }
        ],
        xiaoquang:[
            {
                img: "https://p2.maiyaole.com/img/item/201612/08/200_2016120813201692.jpg",
                names:"阿斯利康 信必可都保 布地奈德福莫特罗粉吸入剂 160μg:4.5μg*60吸",
                price: 235.2,
                userGrade: 16561 //好评数
            },
             {
                img: "https://p4.maiyaole.com/img/item/201808/10/200_20180810095423827.jpg",
                names:  "舒利迭 沙美特罗替卡松粉吸入剂 50μg:250μg*60吸",
                price: 163.8,
                userGrade: 1866 //好评数
            },{
                img: "https://p4.maiyaole.com/img/item/201808/10/200_20180810100029283.jpg",
                
                names: "顺尔宁 孟鲁司特钠咀嚼片 4mg*5片",
                price: 218,
                userGrade: 16544 //好评数
            },
             {
                img: "https://p3.maiyaole.com/img/item/201808/10/200_20180810095511400.jpg",
                names: "阿斯利康 普米克令舒 吸入用布地奈德混悬液 2ml:1mg*5支 ",
                price: 95.7,
                userGrade: 1355 //好评数
            }
        ]

    },
     mutations:{
        changeLeixing(data,payload){
            data.buwei.splice(0,1,payload)
            // console.log(data.buwei)
        }
     }
        
});

export default store;