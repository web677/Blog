
const CommonInputValidation = require('./CommonInputValidation')
const InputValidation = new CommonInputValidation()
const User = require('../DB/user')

const DB = require('./MongodbModel')

function CenterLoginModel(data) {

    return new Promise((resolve,reject) => {
        if (!InputValidation.isName(data.username)) {
            reject ("用户名请输入汉字或英文字母！")
            return
        }

        if (!InputValidation.isPwd(data.password)) {
            reject ("密码请输入英文字母或数字！")
            return
        }

        DB.find({ username: data.username})
            .then(result => {
                DB.find(data)
                    .then(result => {
                        resolve("登录成功")
                    })
            })
            .catch(err => {
                console.log("err" + err)
                err = err == 4001 ? "用户不存在" : err
                reject(err)
                return
            })

    })
}

module.exports = CenterLoginModel
