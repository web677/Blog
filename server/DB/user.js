var mongoose = require('mongoose')
var config = require('../Config/index')

const DB_URL = config.mongodb.host + ":" + config.mongodb.port + "/" + config.mongodb.db

mongoose.connect(DB_URL, { "user": config.mongodb.username, "pass": config.mongodb.password, useMongoClient: true })

mongoose.connection
    .on('connected', function () {
        console.log('Mongoose 成功连接到 ' + DB_URL)
    })
    .on('error', function (err) {
        console.log('Mongoose 连接错误： ' + err)
    })
    .on('disconnected', function () {
        console.log('Mongoose 连接被拒绝')
    })

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
},{
    collection: "user"
})

var User = mongoose.model('user', userSchema)

module.exports = User

