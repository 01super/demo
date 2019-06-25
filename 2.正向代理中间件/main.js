const express = require('express');
const httpProxyMiddleware = require('http-proxy-middleware');




const server = express();


server.get('/', (request, response)=>{
    // request客户端请求服务器的对象
    // response服务器将要响应给客户端的对象
    response.sendFile(__dirname+'/www/index.html');
})

// 正向代理中间件
// 凡是以'/ajax'开头的请求，都会转发给'http://m.maoyan.com'服务器得到数据
server.use('/ajax', httpProxyMiddleware({
    target: 'http://m.maoyan.com',
    changeOrigin: true
}))




server.listen(8080, '127.0.0.1', (error)=>{
    if(error){
        console.log('启动失败');
    }else{
        console.log('启动成功');
    }
})


