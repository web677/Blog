
const crypto = require('crypto')




const doLogin = (username, ctx) => {
    let sid = crypto.createHash('sha256').update(username).digest('hex')
    ctx.cookies.set("SESSIONID", sid)
    ctx.session[sid] = "logined"
}

const isLogined = (sid, ctx) => {
    return sid && ctx.session[sid] === "logined" ? true : false
}

const doLogout = (sid, ctx) => {
    ctx.session[sid].destory()
}

module.exports = {
    storeLogin,
    isLogined
}
