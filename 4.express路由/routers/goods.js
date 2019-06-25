const {Router} = require('express');

const router = new Router();

// 商品数据
// 商品列表  /api/goods/list   page count  
// 商品详情  /api/goods/detail  id

router.get('/list', (req, res)=>{

    res.end('goods list');

})

router.get('/detail', (req, res)=>{

    res.end('goods detail');

})

module.exports = router;