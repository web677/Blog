const fs = require("fs")
const koaRouter = require("koa-router")()

const CommonLoginModel = require("../Model/Common/CommonLoginModel")

const CenterLoginModel = require("../Model/Center/CenterLoginModel")
const CenterLogoutModel = require("../Model/Center/CenterLogoutModel")
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
    let result = await CenterLogoutModel(ctx.cookies.get("SESSIONID"), ctx.host, ctx)
    ctx.response.body = result
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
