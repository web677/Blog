const fs = require("fs")
const koaRouter = require("koa-router")()

const ChapterIndex = async ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./books/_book/index.html')
}

const Chapter = async ctx => {
    console.log("params:" + JSON.stringify(ctx.params))

    ctx.response.type = 'html'

    if (ctx.params.chapter == 'index') {
        ctx.response.body = fs.createReadStream('./books/_book/index.html')
        return
    }

    if (!ctx.params.session) {
        ctx.redirect(`/books/${ctx.params.chapter}/index.html`)
        return
    }

    ctx.response.body = fs.createReadStream(`./books/_book/${ctx.params.chapter}/${ctx.params.session}`)
}

koaRouter
    .get(["", "/"], ChapterIndex)
    .get(["/:chapter/:session", "/:chapter"], Chapter)

module.exports = koaRouter
