
const CommonLoginModel = require('../Common/CommonLoginModel')

function ajaxReturn(status = 1, info = "success", data = {}) {
    return {
        status: status,
        info: info,
        data: data
    }
}

const CenterLogoutModel = async function (sid, host, ctx) {
    CommonLoginModel.doLogout(sid, ctx)

    return ajaxReturn(1, "success", { go: "//" + host + "/center/login" })
}

module.exports = CenterLogoutModel
