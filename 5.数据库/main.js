const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost:27018/db', {useNewUrlParser: true}, (error) => {
    if (error) {
        console.log('连接失败');
    } else {
        console.log('连接成功');
        findData();
    }
})


// 关闭数据库连接
// mongoose.disconnect();

// 声明数据库表格的结构
let schema = new mongoose.Schema({
    // 声明表格字段和字段类型，类型可取值：String,Number,Boolean,Date, Array，Mixed,  ObjectId
    // name: 'string'
    // name: String

    name: String,

    fav: {
        type: [{name: String, deep: {type: Number, default: 0}}],
        default: []
    },

    props: {
        height: Number,
        gender: {
            type: String,
            default: '男'
        }
    },

    birthday: Date
});

// 创建表格
let Model = mongoose.model('student', schema);

// model用于直接操作数据库表格的

// 新增
function addData() {

    // 创建一条数据
    let info = new Model({
        name: '李四',
        props: {height: 150, gender: '女'},
        birthday: new Date(1998, 7, 12),
        fav: [{name: '唱歌', deep: 0}, {name: '跳舞', deep: 1}]
    });

    // 将数据保存在数据库中

    info.save()
        .then((data) => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })

    //上边的写法和下面的写法是等价的！！！

    info.save((error, data) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    })

}

// 修改
function modifyData() {
    // Model.updateMany   更新多个
    // Model.updateOne    更新第一个
    // Model.findOneAndUpdate   更新第一个
    // Model.findOneAndReplace

    Model.findOneAndReplace({'props.gender': '女'}, {fav: [{name: '游泳', deep: 5}]})
        .then(data => {
            console.log(data);
        })


    // Model.findByIdAndUpdate
    // Model.findByIdAndUpdate({_id: '5c7792dcffd5f08c33b8bf6c'}, {'props.height': 185})
    // .then(data=>{
    //     console.log(data);
    // })
}


// 查看
function findData() {
    //查询，find()接收查询参数，如果不传参，就是查询所有
    // Model.find({'props.gender': '男'}).then(data=>{
    //     console.log(data);
    // })

    Model.countDocuments().then(count => {
        console.log(count);
    })

    Model.findById('5c7790095e210c226c10a1eb').then(data => {
        console.log(data);
    })

    Model.findOne({'props.gender': '男'}).then(data => {
        console.log(data);
    })

}


// 删除
function deleteData() {
    // Model.deleteMany
    // Model.deleteOne
    // Model.findByIdAndDelete
    // Model.findOneAndDelete

}
