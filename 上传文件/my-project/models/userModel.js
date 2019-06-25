const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: String,
    password: String,
    headerImg: {
        type: String,
        default: 'https://pic.52112.com/icon/256/20190218/30594/1516340.png'
    },
    city: String,
    birthday: Date
})

module.exports = mongoose.model('user', schema);


