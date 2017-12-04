const fs = require("fs")
const koaRouter = require("koa-router")()

const Index = (ctx) => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./View/index.html')
}

koaRouter
    .get(["", "index"], Index)

module.exports = koaRouter
