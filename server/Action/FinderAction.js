const fs = require("fs")
const koaRouter = require("koa-router")()

const GetJobsModel = require("../Model/Finder/GetJobsModel")
const StoreJobsModel = require("../Model/Finder/StoreJobsModel")

const Finder = (ctx) => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./View/finder.html')
}

const AjaxGetJobs = async (ctx) => {
    let jobs = await GetJobsModel()
    ctx.response.body = jobs
}

const AjaxStoreJobs = async (ctx) => {
    let result = await StoreJobsModel(ctx.request.body)
    ctx.response.body = result
}

koaRouter
    .get("/", Finder)
    .get("/index", Finder)
    .get("/ajaxgetjobs", AjaxGetJobs)
    .post("/ajaxstorejobs", AjaxStoreJobs)

module.exports = koaRouter
