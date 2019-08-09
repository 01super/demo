### 常见loader  
名称     描述
+ babel-loader     转换ES6、ES7等JS新特性语法css-loader支持.css文件的加载和解析
+ less-loader      将less文件转换成css
+ ts-loader        将TS转换成Js
+ file-loader      进行图片、字体等的打包
+ raw-loader       将文件以字符串的形式导入thread-loader多进程打包J5和cSS
### 常见plugins  
名称              描述
+ CommonsChunkPlugin    将chunks相同的模块代码提取成公共js  
+ CleanWebpackplugin    清理构建目录  
+ ExtractTextWebpackPlugin  将CSS从bunlde文件里提取成一个独立的CSS文件  
+ CopyWebpackPlugin    将文件或者文件夹拷贝到构建的输出目录  
+ HtmiWebpackPlugin      创建html文件去承载输出的bundle  
+ UglifyjsWebpackPlugin    压缩JS  
+ ZipWebpackPlugin      将打包出的资源生成一个zip包  
