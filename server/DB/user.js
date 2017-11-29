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
    name: String,
    username: {
        type: String,
        unique: true
    },
    password: String,
    userid: {
        type: String,
        unique: true
    },
    mobile: {
        type: String,
        unique: true
    },
    age: {
        type: Number,
        min: 0,
        max: 120
    },
    city: String
},{
    collection: "user"
})

var User = mongoose.model('user', userSchema)

module.exports = User

