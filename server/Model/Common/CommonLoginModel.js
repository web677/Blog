
const crypto = require('crypto')


function ajaxReturn(status = 1, info = "success", data = {}) {
    return {
        status: status,
        info: info,
        data: data
    }
}

const doLogin = (username, ctx) => {
    let sid = crypto.createHash('sha256').update(username).digest('hex')
    ctx.cookies.set("SESSIONID", sid)
    ctx.session[sid] = {
        logined: true
    }
}

const isLogined = (sid, ctx) => {
    return ctx.session[sid] && ctx.session[sid].logined ? true : false
}

const doLogout = (sid, ctx) => {
    if (!(sid && ctx.session[sid])){
        return 
    }
    ctx.session[sid].logined = false
}

module.exports = {
    doLogin,
    doLogout,
    isLogined
}
