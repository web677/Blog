<template>
    <div>
        <common-header
            tab="finder"
        />
        <el-table
            :data="jobsList"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="name"
                label="职位"
                width="120"
            ></el-table-column>
            <el-table-column
                sortable
                prop="salary"
                label="薪资"
                width="100"
            ></el-table-column>
            <el-table-column
                prop="company"
                label="公司名"
            ></el-table-column>
             <el-table-column
                prop="size"
                label="公司规模"
                width="120"
            ></el-table-column>
            <el-table-column
                prop="address"
                label="地点"
            ></el-table-column>
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
                text: "正在努力拉取数据..."
            })
            axios.get(ajaxGetJobs)
                .then(response => {
                    const res = response.data
                    initLoading.close()
                    this.jobsList = res.data
                })
        }
    }
</script>

