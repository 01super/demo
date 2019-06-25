// 用户数据
// 登录请求 ：  /api/user/login
// 注册请求 ：  /api/user/regiester
// 获得用户账号请求 ：  /api/user/info



// module.exports = [
//     {
//         path: '/login',
//         method: 'get',
//         callback(req, res){
//             console.log('接收到了请求');
//             console.log(req.url);
//             res.end('helloworld');
//         }
//     }
// ]

const express = require('express');

// 获得路由模块
const Router = express.Router;

// 创建路由对象
const router = new Router();


router.get('/login', (req, res)=>{

    res.end('login');

})
router.get('/regiester', (req, res)=>{

    res.end('regiester');
    
})

router.get('/info', (req, res)=>{

    res.end('info');
    
})










// 向外输出router对象
module.exports = router;




