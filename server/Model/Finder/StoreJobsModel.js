const Jobs = require('../../DB/jobs')
const DB = require('../Common/MongodbModel')

function ajaxReturn(status, data, info) {
    return {
        status: status,
        data: data,
        info: info
    }
}

const StoreJobsModel = async (params) => {

    if (!params.jobid){
        return ajaxReturn(0, {}, "职位ID不存在")
    }

    let _result = await DB.find({ jobid: params.jobid }, Jobs)
    console.log(_result)

    if (_result == 2001){
        return ajaxReturn(0, {}, "该职位已在收藏夹")
    }

    let result = await DB.add(params, Jobs)

    if (result === 3001) {
        return ajaxReturn(1, {}, "收藏成功")
    }

    return ajaxReturn(0, {}, result)
}

module.exports = StoreJobsModel
