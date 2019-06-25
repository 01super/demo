// 处理ajax的请求

const {Router} = require('express');
const bodyParser = require('body-parser');
const User = require('../models/userModel');

const router = new Router();

// 解析post请求的参数
router.use(bodyParser());


// 注册请求
router.post('/regiester', (req, res)=>{
    // 处理参数
    let {username, password, rePassword} = req.body;

    if(!username || !password || !rePassword){
        res.json({
            status: 1,
            message: '输入不能为空',
            data: null
        });
        return;
    }

    if(password != rePassword){
        res.json({
            status: 2,
            message: '两次输入的密码不一致',
            data: null
        });
        return;
    }


    // 数据库操作
    User.findOne({username})
    // 判断该用户是否存在
    .then(result=>{
        if(result){
            // 存在，注册失败
            res.json({
                status: 3,
                message: '该用户已存在',
                data: null
            });
        }else{
            // 不存在，将数据保存在数据库中
            return new User({
                username,
                password
            }).save();
        }
    })
    //注册用户信息的结果
    .then((userInfo)=>{
        res.json({
            status: 0,
            message: '注册成功',
            data: null
        })
    })

    

    
    

    
})

// 登录请求
router.post('/login', (req, res)=>{
    let {username, password} = req.body;
    //对请求参数进行判断
    if(!username || !password){
        res.json({
            status: 1,
            message: '输入不能为空',
            data: null
        });
        return;
    }

    // 查询数据库
    User.findOne({username, password})
    .then(data=>{
        if(data){
            //用户名和密码都正确，登录成功
            res.cookies.set('USERID', data._id);
            res.json({
                status: 0,
                message: '登录成功',
                data: null
            });
        }else{
            // 登录失败
            res.json({
                status: 2,
                message: '用户名或密码错误',
                data: null
            });
        }
    })
})


// 处理提交头像的请求
router.post('/upload', (req, res)=>{
    let multiparty = require('multiparty');
    let form = new multiparty.Form({
        uploadDir: './static/images'
    });
    form.parse(req, (error, fileds, files)=>{
        if(error){
            res.json({  
                data: null,
                message: '上传失败',
                status: 1
            });
        }else{
            let path = '/'+files.headerImg[0].path;
            res.json({
                data: {
                    path
                },
                message: '上传成功',
                status: 0
            });

            // 保存图片路径
            let id = res.cookies.get('USERID');
            User.findByIdAndUpdate(id, {headerImg: path});
        }
    })

})

module.exports = router;


