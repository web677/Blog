
const CommonInputValidation = require('./CommonInputValidation')
const InputValidation = new CommonInputValidation()
const User = require('../DB/user')

const DB = require('./MongodbModel')

function CenterLoginModel(data) {

    if(!InputValidation.isName(data.username)){
        reject("用户名请输入汉字或英文字母！")
        return
    }

    if(!InputValidation.isPwd(data.password)){
        reject("用户名请输入汉字或英文字母！")
        return
    }

    return DB.delete({name: "小汪"});

}

module.exports = CenterLoginModel
