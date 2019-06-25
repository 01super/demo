const express = require('express');
const url = require('url');
const bodyParser = require('body-parser');

// 创建服务器
const server = express();


// console.log(1);
// console.log(__dirname);
// console.log(__filename);
// console.log(2);


// 处理客户端请求的方法
// server.get()
// server.post()

// 处理客户端的get请求
// 参数1：url pathname路径
// 参数2：处理该请求的回调函数
server.get('/', (request, response)=>{

    // 解析get请求的url, 获得get请求参数
    let {query} = url.parse(request.url, true);
    console.log('获得get请求的参数:');
    console.log(query);

    // 读文件，并且将文件内容响应给客户端
    response.sendFile(__dirname+'/www/index.html');


});


// 使用了bodyParser解析请求中的body数据
server.use(bodyParser());

// 处理客户端的post请求
// 参数1：url pathname路径
// 参数2：处理该请求的回调函数
server.post('/api/list', (request, response)=>{

    console.log(request.body);

    let data = ['item1', 'item2', 'item3'];

    // 响应给客户端json数据
    response.json(data);

});


server.post('/api/login', (req, res)=>{
    
})



// 启动服务器
server.listen(8080, '127.0.0.1', (error)=>{
    if(error){
        console.log('服务器启动失败');
        console.log(error);
    }else{
        console.log('服务器启动成功');
        console.log('http://127.0.0.1:8080');
    }
})