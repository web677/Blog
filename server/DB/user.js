var mongoose = require('mongoose')
var config = require('../Config/index')

// const DB_URL = config.mongodb.host + ":" + config.mongodb.port + "/" + config.mongodb.db
var DB_URL = "mongodb://laoli:laoli@127.0.0.1/Blog"
console.log(DB_URL)
// mongoose.connect(DB_URL, { "user": config.mongodb.username, "pass": config.mongodb.password, useMongoClient: true })
var db = mongoose.createConnection(DB_URL)

mongoose.connection.on('connected', function () {
    console.log('Mongoose 成功连接到 ' + DB_URL)
})

mongoose.connection.on('error', function (err) {
    console.log('Mongoose 连接错误： ' + err)
})

mongoose.connection.on('disconnected', function () {
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

var User = db.model('user', userSchema)

// User.find({}, function (param, doc) { console.log(param,doc)  })
module.exports = User
// db.createUser({user:'laoli',pwd:'laoli', roles:[{role:'readWrite', db:'Blog'}]})

