const Koa = require("koa")
const app = new Koa()

const koaRouter = require("koa-router")()
const koaStatic = require("koa-static")("./")
const koaCors = require("koa2-cors")()

const CenterAction = require("./Action/CenterAction")
const IndexAction = require("./Action/IndexAction")
const FinderAction = require("./Action/FinderAction")


koaRouter
    .use("/", IndexAction.routes(), IndexAction.allowedMethods())
    .use("/center", CenterAction.routes(), CenterAction.allowedMethods())
    .use("/finder", FinderAction.routes(), FinderAction.allowedMethods())


app
    .use(koaCors)
    .use(koaRouter.routes())
    .use(koaRouter.allowedMethods())
    .use(koaStatic)
    .listen(3000)
