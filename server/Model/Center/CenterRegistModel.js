
const CommonInputValidation = require('../Common/CommonInputValidation')
const InputValidation = new CommonInputValidation()

const User = require('../../DB/user')
const DB = require('../Common/MongodbModel')

function ajaxReturn(status = 1, info = "success", data = {}) {
    return {
        status: status,
        info: info,
        data: data
    }
}

const CenterRegistModel = async function (data, host) {

    if (!InputValidation.isName(data.username)) {
        return ajaxReturn(0, "用户名请输入汉字或英文字母！")
    }

    if (!InputValidation.isPwd(data.password)) {
        return ajaxReturn(0, "密码请输入英文字母或数字！")
    }

    if (data.password != data.repassword) {
        return ajaxReturn(0, "两次密码输入不一致！")
    }

    const result = await DB.find({ username: data.username }, User)

    if (result === 2001) {
        return ajaxReturn(0, "用户已存在，请尝试登录")
    }

    const result1 = await DB.add(data, User)

    if (result1 === 3001) {
        return ajaxReturn(1, "注册成功", { go: "//" + host + "/index" })
    }

    return ajaxReturn(0, result1)
}

module.exports = CenterRegistModel
