const fs = require("fs")
const koaRouter = require("koa-router")()

const CommonLoginModel = require("../Model/Common/CommonLoginModel")

const Index = async ctx => {
    let isLogin = await CommonLoginModel.isLogined(ctx.cookies.get("SESSIONID"), ctx)
    if (!isLogin){
        ctx.redirect('./center/login')
        return
    }
    ctx.redirect('//book.eshengeshu.com')
}

koaRouter
    .get(["", "index"], Index)

module.exports = koaRouter
