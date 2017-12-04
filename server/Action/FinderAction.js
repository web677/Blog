const fs = require("fs")
const koaRouter = require("koa-router")()

const GetJobsModel = require("../Model/Finder/GetJobsModel")

const Finder = (ctx) => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./View/finder.html')
}

const AjaxGetJobs = async (ctx) => {
    let jobs = await GetJobsModel()
    ctx.response.body = jobs
}

koaRouter
    .get("/", Finder)
    .get("/index", Finder)
    .get("/ajaxgetjobs", AjaxGetJobs)

module.exports = koaRouter
