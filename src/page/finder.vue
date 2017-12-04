<template>
    <div>
        <common-header
            tab="home"
        />
        <el-table
            :data="jobsList"
            border
            style="width: 100%"
        >
            <el-table-column
                sortable
                prop="date"
                label="日期"
                width="100"
            ></el-table-column>
            <el-table-column
                prop="name"
                label="职位"
                width="120"
            ></el-table-column>
            <el-table-column
                prop="salary"
                label="薪资"
                width="100"
            ></el-table-column>
            <el-table-column
                prop="company"
                label="公司名"
            ></el-table-column>
            <el-table-column
                prop="address"
                label="地点"
            ></el-table-column>
            <el-table-column
                prop="tag"
                label="标签"
                width="100"
                :filters="[{ text: '高薪', value: '高薪' }, { text: '大公司', value: '大公司' }]"
                :filter-method="filterTag"
                filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                    :type="scope.row.tag === '高薪' ? 'primary' : 'success'"
                    close-transition>{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="120"
            >
                <template slot-scope="scope">
                    <el-button @click="checkDetail(scope.row.link)" type="text" size="small">查看详情</el-button>
                    <el-button @click="store(scope.row.id)" type="text" size="small">收藏</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

    import Vue from "Vue"
    import { Loading, Table, TableColumn, Tag, Button} from 'element-ui'
    import Header from "../components/Common-header.vue"

    import axios from "axios"

    const ajaxGetJobs = "//" + window.location.host + "/finder/ajaxgetjobs"
    const jobs = {
        "status": 1,
        "data": {
            "list": [
                {
                    "name": "财务",
                    "link": "http://ww.baidu.com",
                    "salary": "10~11",
                    "date": "2017-11-23",
                    "address": "上海徐汇",
                    "company": "返利网",
                    "tag": "大公司",
                    "id": 1001
                }
            ]
        },
        "info": "success"
    }


    export default {
        data () {
            return {
                Bus: new Vue(),
                jobsList: []
            }
        },
        components: {
            "common-header": Header,
            "el-table": Table,
            "el-table-column": TableColumn,
            "el-tag": Tag,
            "el-button": Button
        },

        computed: {
            
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            checkDetail(link){
                window.open(link)
            },
            store(id){
                console.log(id)
            }
        },
        created () {
            document.title = "首页"
            const initLoading = Loading.service({
                text: "页面初始化中"
            })
            axios.get(ajaxGetJobs)
                .then(response => {
                    const res = response.data
                    initLoading.close()
                    this.jobsList = jobs.data.list
                })
        }
    }
</script>

