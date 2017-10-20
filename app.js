const Koa = require("koa")
const fs = require("fs")
const index = require("./dist/index.html")

const app = new Koa()


app.use(async ctx => {
    if(ctx.path == "/" || ctx.path == "/login" || ctx.path == "/regist"){
        ctx.status = 200
        ctx.body = index
        return
    }
    ctx.body = "404"
})

app.listen(3000)

