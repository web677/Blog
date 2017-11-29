/* code
    2001: 查询成功
    3001: 用户不存在
*/
const User = require('../DB/user')

module.exports = {
    add: (data, cb) => {
        let _user = new User(data)
        return _user.save()
        .then(CommandResult => {
            console.log("结果：" + CommandResult, CommandResult)
            cb(null, "保存成功")
        })
        .catch(err => {
            cb("保存失败", null)
        })
    },
    delete: (query,cb) => {
        return User.remove(query)
        .then(CommandResult => {
            console.log("结果：" + CommandResult, CommandResult, CommandResult.result)
            if (CommandResult.result.n == 0) {
                cb("用户不存在", null)
            } else[
                cb(null, "删除成功")
            ]
        }).catch(err => {
            cb(err, null)
        })
    },
    find: query => {
        return User.find(query)
        .then(result => {
            if(result.length == 0){
                throw 4001
                return
            }

            return 2001
        })
    }
}
