const Koa = require("koa")
const fs = require("fs")

const app = new Koa()


app.use(async ctx => {
    if(ctx.path == "/" || ctx.path == "/login" || ctx.path == "/regist"){
        ctx.status = 200
        ctx.body = fs.createReadStream("./dist/index.html");
    }
})



