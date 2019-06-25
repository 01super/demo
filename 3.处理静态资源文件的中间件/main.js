const express = require('express');
const httpProxyMiddleware = require('http-proxy-middleware');


/*
index.html
html

js

css

images


fonts


页面请求
http://localhost:8080/页面.html

js
http://localhost:8080/js/js.js

js
http://localhost:8080/js/js.js




*/




const server = express();


server.get('/', (request, response)=>{
    // request客户端请求服务器的对象
    // response服务器将要响应给客户端的对象
    response.sendFile(__dirname+'/www/index.html');
})


// server.use('/static', (request, response)=>{
//     response.sendFile(__dirname+'/www'+request.url);
// });

// 上面的use方法处理和下面的use方法处理等价！！！

// 专门处理静态资源文件的中间件
server.use('/static', express.static(__dirname+'/www'));



// server.use('/js', (request, response)=>{
//     response.sendFile(__dirname+'/www/js'+request.url);
// })

// server.use('/css', (request, response)=>{
//     response.sendFile(__dirname+'/www/css'+request.url);
// })

// server.use('/images', (request, response)=>{
//     response.sendFile(__dirname+'/www/images'+request.url);
// })
// server.use('/img', (request, response)=>{
//     response.sendFile(__dirname+'/www/img'+request.url);
// })

// server.use('/iconfont', (request, response)=>{
//     response.sendFile(__dirname+'/www/iconfont'+request.url);
// })

server.listen(8080, '127.0.0.1', (error)=>{
    if(error){
        console.log('启动失败');
    }else{
        console.log('启动成功');
    }
})


