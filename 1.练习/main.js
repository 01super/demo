const express = require('express');
const http = require('http');



const server = express();


server.get('/', (request, response)=>{
    // request客户端请求服务器的对象
    // response服务器将要响应给客户端的对象
    response.sendFile(__dirname+'/www/index.html');
})


server.use('/ajax', (request, response, next)=>{
    console.log(request.url);


    // http://127.0.0.1:8080/api/nowplaying/movies
    // 对应的连接：/ajax/movieOnInfoList?token=

    // http://127.0.0.1:8080/api/coming/movies
    // 对应的连接：/ajax/comingList?ci=30&token=&limit=10

    // http://127.0.0.1:8080/api/banner
    // 对应的连接：/ajax/mostExpected?ci=30&limit=10&offset=0&token=


    //向猫眼的后台拿电影数据
    http.request({//创建请求
        method: 'GET',
        hostname: 'm.maoyan.com',
        port: 80,
        path: '/ajax'+request.url
    }, (res)=>{
        // 得到了对方服务器的响应
        //接收数据
        let data = '';
        res.on('data', (bf)=>{
            data += bf;
        });
        res.on('end', ()=>{
            //接收数据完成，响应自己的客户端
            let jsonData = JSON.parse(data);
            response.json(jsonData);
        })
    }).end();//发送请求



    
})


// //正在热映的电影
// server.get('/api/nowplaying/movies', (request, response)=>{
//     // http://m.maoyan.com/ajax/movieOnInfoList?token=
//     //向猫眼的后台拿电影数据
//     http.request({//创建请求
//         method: 'GET',
//         hostname: 'm.maoyan.com',
//         port: 80,
//         path: '/ajax/movieOnInfoList?token='
//     }, (res)=>{
//         // 得到了对方服务器的响应
//         //接收数据
//         let data = '';
//         res.on('data', (bf)=>{
//             data += bf;
//         });
//         res.on('end', ()=>{
//             //接收数据完成，响应自己的客户端
//             let jsonData = JSON.parse(data);
//             response.json(jsonData);
//         })
//     }).end();//发送请求
// })

// //即将上映的电影
// server.get('/api/coming/movies', (request, response)=>{
//     // http://m.maoyan.com/ajax/comingList?ci=30&token=&limit=10
//     //向猫眼的后台拿电影数据
//     http.request({//创建请求
//         method: 'GET',
//         hostname: 'm.maoyan.com',
//         port: 80,
//         path: '/ajax/comingList?ci=30&token=&limit=10'
//     }, (res)=>{
//         // 得到了对方服务器的响应
//         //接收数据
//         let data = '';
//         res.on('data', (bf)=>{
//             data += bf;
//         });
//         res.on('end', ()=>{
//             //接收数据完成，响应自己的客户端
//             let jsonData = JSON.parse(data);
//             response.json(jsonData);
//         })
//     }).end();//发送请求
// })

// //推广的电影
// server.get('/api/banner', (request, response)=>{
//     // http://m.maoyan.com/ajax/mostExpected?ci=30&limit=10&offset=0&token=
//     //向猫眼的后台拿电影数据
//     http.request({//创建请求
//         method: 'GET',
//         hostname: 'm.maoyan.com',
//         port: 80,
//         path: '/ajax/mostExpected?ci=30&limit=10&offset=0&token='
//     }, (res)=>{
//         // 得到了对方服务器的响应
//         //接收数据
//         let data = '';
//         res.on('data', (bf)=>{
//             data += bf;
//         });
//         res.on('end', ()=>{
//             //接收数据完成，响应自己的客户端
//             let jsonData = JSON.parse(data);
//             response.json(jsonData);
//         })
//     }).end();//发送请求
// })


server.listen(8080, '127.0.0.1', (error)=>{
    if(error){
        console.log('启动失败');
    }else{
        console.log('启动成功');
    }
})


