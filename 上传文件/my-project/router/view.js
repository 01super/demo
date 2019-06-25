// 处理页面的请求
const {Router} = require('express');
const User = require('../models/userModel');
const url = require('url');
// const path = require('path');

const router = new Router();

router.get('/', (req, res)=>{
    //判断用户是否登录过了
    // 从cookies取用户的id
    let userid = res.cookies.get('USERID');
    // 查询数据库是否存在该用户
    User.findById(userid)
    .then((data)=>{
        if(data){
            //用户登录了

            // 查询用户列表
            // 取出参数
            let {page, count} = url.parse(req.url, true).query;
            page = Number(page) || 1;
            count = Number(count) || 5;

            // 计算页数
            User.countDocuments().then(
                num=>{
                    let pages = Math.ceil(num / count);
                    //分页查询
                    // 默认5条数据1页
                    User.find().skip((page-1)*count).limit(count).then(data=>{
                        console.log(data);
                        
                        
        
                        // 响应客户端
                        res.render('index', {
                            isLogin: true,
                            name: data.username,
                            headerImg: data.headerImg,
                            userList: data,
                            pages,
                            page
                        });
        
                    })

                }
            )
            
            

            
        }else{
            // 用户没有登录
            res.render('index', {
                isLogin: false
            });
        }
    })
})

router.get('/login', (req, res)=>{
    res.render('login');
})

router.get('/regiester', (req, res)=>{
    res.render('regiester');
})

module.exports = router;



