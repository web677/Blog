/* code
    2001: 查询成功
    3001: 保存成功
    4001: 用户不存在
*/
const User = require('../../DB/user')

module.exports = {
    add: async data => {
        let _user = new User(data)
        let result = await _user.save()
            .then(CommandResult => {
                return 3001
            })
            .catch(err => {
                return err
            })
        return result
    },
    delete: async query => {
        let result = await User.remove(query)
            .then(CommandResult => {
                if (CommandResult.result.n == 0) {
                    return 4001
                } else{
                    return "删除成功"
                }
            })
            .catch(err => {
                return err
            })

        return result
    },
    find: async query => {
        let result = await User.find(query)
            .then(result => {
                if (result.length == 0) {
                    return 4001
                }

                return 2001
            })
            .catch(err => {
                return err
            })

        return result
    }
}
