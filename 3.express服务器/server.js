const express = require('express');

// 创建服务器
const server = express();

// 参数1：请求url的pathname值是这个参数的一部分可以匹配
// 参数2：处理请求的函数
// 不管是get请求或者post请求，只要url符合要求，请求都会被第二个参数的函数处理
server.use('/', (request, response, next)=>{
    console.log('被第一个use处理了');

    // next是一个函数，被调用时，传入到下一个处理方法中去
    response.write('1');

    response.data = '123';


    next();
})


server.use('/home', (req, res, next)=>{
    console.log('被第二个use处理了');

    console.log(res.data);

    res.write('2');

    next();
})

server.get('/', (req, res)=>{
    res.end('3');
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