const fs = require("fs")
const koaRouter = require("koa-router")()

const CommonLoginModel = require("../Model/Common/CommonLoginModel")

const CenterLoginModel = require("../Model/Center/CenterLoginModel")
const CenterRegistModel = require("../Model/Center/CenterRegistModel")

const CenterLoginRegist = async (ctx) => {
    ctx.response.type = 'html'
    let isLogin = await CommonLoginModel.isLogined(ctx.cookies.get("SESSIONID"), ctx)
    if (isLogin){
        ctx.redirect('../index')
    }else{
        ctx.response.body = fs.createReadStream('./View/center.html')
    }
}


const AjaxCenterLogin = async (ctx) => {
    let result = await CenterLoginModel(ctx.query, ctx.host, ctx)
    ctx.response.body = result
}

const AjaxCenterLogout = async (ctx) => {
    let result = await CommonLoginModel.doLogout(ctx.cookies.get("SESSIONID"), ctx)
    ctx.redirect('../index')
}

const AjaxCenterRegist = async (ctx) => {
    let result = await CenterRegistModel(ctx.query, ctx.host)
    ctx.response.body = result
}


koaRouter
    .get("/regist", CenterLoginRegist)
    .get("/ajaxregist", AjaxCenterRegist)
    .get("/login", CenterLoginRegist)
    .get("/ajaxlogin", AjaxCenterLogin)
    .get("/ajaxlogout", AjaxCenterLogout)

module.exports = koaRouter
