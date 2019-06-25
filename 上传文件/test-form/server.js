var multiparty = require('multiparty');
var http = require('http');

http.createServer(function(req, res) {


  if (req.url === '/upload' && req.method === 'POST') {
    // parse a file upload
    // 接收到了上传图片的请求
    
    // 创建表单处理对象
    var form = new multiparty.Form({
        uploadDir: './img'
    });

    // 解析请求
    form.parse(req, (error, fileds, files)=>{
        console.log('接收到乐客户端上传图片的请求，并且处理了结果：');
        console.log(error, fileds, files);
        res.writeHead(200, {'content-type': 'text/plain;'});
        res.end('接收成功');
    });

    return;
  }

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  let data = require('fs').readFileSync('./index.html');
  res.end(data);


}).listen(8080);