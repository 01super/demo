### 常见loader  
+ babel-loader     转换ES6、ES7等JS新特性语法css-loader支持.css文件的加载和解析，配置文件是.babelrc
+ less-loader      将less文件转换成css
+ ts-loader        将TS转换成Js
+ file-loader      进行图片、字体等的打包
+ raw-loader       将文件以字符串的形式导入thread-loader多进程打包J5和cSS
### 常见plugins  
+ CommonsChunkPlugin    将chunks相同的模块代码提取成公共js  
+ CleanWebpackplugin    清理构建目录  
+ ExtractTextWebpackPlugin  将CSS从bunlde文件里提取成一个独立的CSS文件  
+ CopyWebpackPlugin    将文件或者文件夹拷贝到构建的输出目录  
+ HtmiWebpackPlugin      创建html文件去承载输出的bundle  
+ UglifyjsWebpackPlugin    压缩JS  
+ ZipWebpackPlugin      将打包出的资源生成一个zip包  
+ css -loader-用于加载css文件,并且转换成 commonjs对象  
+ style-loader-将样式通过<style>标签插入到head中  
### webpack开启监听模式,有两种方式  
  +  启动 webpack命令时,带上-watch参数(需要手动刷新浏览器)  
  +  在配置 webpack. config.js中设置 watch:true  
### 静态资源内联  
  + 小图片和字体资源内联（减少http请求）：url-loader  
  + html和js：raw-loader(0.5.1)  
  ++ <script>S{require("raw-loader!babel-loaderl. /meta.htmI")}</script>  
  ++ <script>${(require('raw-loader!babel-loader!../node modules/lib-flexible')}</script>  
  + css内联：借助style-loader或html-inline-css-webpack-plugin（推荐）  
### 创建ts支持的webpack
  #### 依赖项：  
  + typescript(tsc --init：生成ts的配置文件)  
  + webpack、webpack-cli、webpack-dev-server
  + ts-loader：解析ts文件为js文件
  + html-webpack-plugin：自动生成html主页，并把输出文件自动嵌入该文件中
  

  
