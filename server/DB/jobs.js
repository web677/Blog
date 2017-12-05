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

var jobsSchema = new mongoose.Schema({
    name: String,
    jobid: {
        type: String,
        unique: true
    },
    link: String,
    salary: String,
    address: String,
    company: String,
    size: String
}, {
        collection: "jobs"
    })

var Jobs = mongoose.model('jobs', jobsSchema)

module.exports = Jobs
