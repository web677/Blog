const fs = require("fs")
const koaRouter = require("koa-router")()

const CenterLoginModel = require("../Model/Center/CenterLoginModel")
const CenterRegistModel = require("../Model/Center/CenterRegistModel")

const CenterLoginRegist = (ctx) => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./View/center.html')
}


const AjaxCenterLogin = async (ctx) => {
    let result = await CenterLoginModel(ctx.query, ctx.host)
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

module.exports = koaRouter
