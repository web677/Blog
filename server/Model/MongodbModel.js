
const User = require('../DB/user')

module.exports = {
    add: (data) => {
        return new Promise(function(resolve,reject){
            let _user = new User(data)
            _user.save(err => err ? reject(err) : resolve())
        })
    },
    delete: (query) => {
        return new Promise(function(resolve,reject){
            console.log("query:" + query)
            User.remove(query, function(err,result){
                if(err){
                    console.log("出错了：" + err)
                    reject(err)
                }else{
                    console.log("结果是：" + result)
                    resolve(result)
                }
            })
        })
    }
}



