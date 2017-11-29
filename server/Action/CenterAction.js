const fs = require("fs")
const koaRouter = require("koa-router")()

const CenterLoginModel = require("../Model/CenterLoginModel")

const CenterLoginRegist = (ctx) => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./View/center.html')
}


const AjaxCenterLogin = async (ctx) => {

    await CenterLoginModel(ctx.query)
        .then(function (result) {
            ctx.response.body = {
                status: 1,
                data: {
                    go: "index.html"
                },
                info: result
            }
        })
        .catch(function (errorInfo) {
            ctx.response.body = {
                status: 0,
                data: {
                    go: ""
                },
                info: errorInfo
            }
        })

}

const AjaxCenterRegist = async (ctx) => {
    ctx.response.body = {
        status: 1,
        data: {
            go: ""
        },
        info: "success"
    }
}


koaRouter
    .get("/regist", CenterLoginRegist)
    .get("/ajaxregist", AjaxCenterRegist)
    .get("/login", CenterLoginRegist)
    .get("/ajaxlogin", AjaxCenterLogin)

module.exports = koaRouter
