/* code
    2001: 查询成功
    3001: 保存成功
    4001: 用户不存在
*/

module.exports = {
    add: async (data, Model) => {
        let _user = new Model(data)
        let result = await _user.save()
            .then(CommandResult => {
                return 3001
            })
            .catch(err => {
                return err
            })
        return result
    },
    delete: async (query, Model) => {
        let result = await Model.remove(query)
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
    find: async (query, Model) => {
        let result = await Model.find(query)
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
