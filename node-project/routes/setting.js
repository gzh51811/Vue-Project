const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const {
    connect,
    insert,
    find,
    ObjectId,
    update,
    del
} = require("../libs/mongo.js");
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// 查询
router.get('/Swipe', async (req, res, next) => {
    let {author} = req.query
    let data = await find(`list`, author ? {
        author
    } : {})
    res.send(data);
    // res.send(123);
});
// 查（登录）
router.post('/RouterLogin',bodyParser.urlencoded({ extended: false }), async (req, res, next) => {
    let {name,password} = req.body
    password = isNaN(password) ? password : password*1;
    let data = await find(`user`, name ? {
        name
    } : {})
    if(data[0].password==password){
        res.send({
            status:1,
            name,
            password
        });
    }else{
        res.send({status:0})
    }
});
// 增
router.post('/RouterEnter', bodyParser.urlencoded({ extended: false }),async (req, res, next) => {
    let {name,password} = req.body
    password = isNaN(password) ? password : password*1;
    let data = await find(`user`, name ? {name} : {})
    if(data[0]!=null){
        res.send({status:0})
    }else{
        let datanew = await insert(`user`, [{
                name,
                password
            }])
        res.send({status:1})
    }
});
// 改
router.get('/billUpdate', async (req, res, next) => {
    let {
        id,
        val1,
        val2,
        val3,
        val4,
        val5
    } = req.query
    await update('list', { _id: ObjectId(id) }, {
        name: val1,
        asupplierge: val2,
        price: val3,
        pay: val4,
        time: val5
    });

});
// 删
router.get('/updata', async (req, res, next) => {
    let {
        _id
    } = req.query
    let data = await del('list', { _id: ObjectId(_id) });
    res.send('succes');
});
router.post('/autoLogin', async (req, res, next) =>{
    res.send(token.checkToken(req.headers.token)); 
});
module.exports = router