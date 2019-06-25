const express = require('express');
const user = require('./routers/user');


const server = express();





server.use('/api/user', user);

server.use('/api/goods', require('./routers/goods'));




// 订单数据

// 店铺数据

// 其他信息



server.listen(8080, (error)=>{
    if(error){
        console.log('启动失败');
        
    }else{
        console.log('启动成功'); 
    }
})