const mongoose = require('mongoose')
const config = require('../Config/index')

const DB_URL = config.mongodb.host + "/" + config.mongodb.db

mongoose.connect(DB_URL, {"user": config.mongodb.username, "pass": config.mongodb.password, useMongoClient: true})

mongoose.connection.on('connected', function () {
    console.log('Mongoose 成功连接到 ' + DB_URL)
})

mongoose.connection.on('error', function (err) {
    console.log('Mongoose 连接错误： ' + err)
})

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose 连接被拒绝')
})

const UserSchema = new mongoose.Schema({
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
})


const User = mongoose.model('user', UserSchema)

module.exports = User
