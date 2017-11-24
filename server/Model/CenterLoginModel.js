
const CommonInputValidation = require('./CommonInputValidation')
const InputValidation = new CommonInputValidation()

const DB = require('./MongodbModel')

function CenterLoginModel(data) {
    return new Promise(function (resolve, reject) 
    {
        if(!InputValidation.isName(data.username)){
            reject("用户名请输入汉字或英文字母！")
            return
        }

        if(!InputValidation.isPwd(data.password)){
            reject("用户名请输入汉字或英文字母！")
            return
        }

        DB.delete({userid: "1878"})
            .then(function(result){
                resolve()
            })
            .catch(function(err){
                reject(err)
            })

    })


}

module.exports = CenterLoginModel
