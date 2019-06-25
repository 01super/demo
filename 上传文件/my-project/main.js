const express = require('express');
const mongoose = require('mongoose');
const Cookies = require('cookies');

const server = express();


// 配置模板引擎, 模板文件为.ejs文件
// server.set('view engine', 'ejs');//服务器会使用模板引擎，模块引擎的名字是ejs
// server.set('views', './www');//设置模板存放的目录


// 配置模板引擎, 模板文件为.html文件,又使用ejs模板引擎
server.set('view engine', 'html');
server.set('views', './views');
// 自定义模板引擎，为html
// 参数1：模板引擎的名字
// 参数2:模板引擎的实现，的实现函数
server.engine('html', require('ejs').renderFile);



// server.get('/', (req, res)=>{
//     res.render('test', 
//         {
//             name: '张三', 
//             isShow: false, 
//             list: ['item1', 'item2', 'item3', 'item4']
//         }
//     );
// })


server.use('', (req, res, next)=>{
    let cookies = new Cookies(req, res);
    //设置cookie
    // cookies.set('keyword', 'hello world');
    //获取cookie
    // let value = cookies.get('test');
    res.cookies = cookies;
    next();
})

// 处理静态资源文件
server.use('/public', express.static('./static'));
server.use('/static', express.static('./static'));

server.use('/api', require('./router/api'));

server.use('/', require('./router/view'));




// 连接数据库
new Promise((resolve, reject)=>{
    mongoose.connect('mongodb://localhost:27018/db',{ useNewUrlParser: true}, (error)=>{
        if(error){
            reject('数据库连接失败');
        }else{
            console.log('数据库连接成功');
            resolve();
        }
    })
})
// 启动服务器
.then(()=>{
return new Promise((resolve, reject)=>{
    server.listen(8080, (error)=>{
        if(error){
            reject('服务器启动失败');
        }else{
            console.log('服务器启动成功');
            console.log('http://localhost:8080');
        }
    })
})
})
.catch(error=>{
    console.log(error);
})








