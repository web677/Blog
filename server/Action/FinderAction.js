const fs = require("fs")
const koaRouter = require("koa-router")()

const Finder = (ctx) => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./View/finder.html')
}

const AjaxGetJobs = (ctx) => {
    ctx.response.body = { result: "很好"}
}

koaRouter
    .get("/", Finder)
    .get("/index", Finder)
    .get("/ajaxgetjobs", AjaxGetJobs)

module.exports = koaRouter
