

<template>
    <div>
        <common-header
            tab="user"
        />
        <center-form 
            type="login"
        />
    </div>

</template>

<script>
    import Vue from "Vue"
    import { Message } from 'element-ui'
    import axios from "axios"

    import Header from "../components/Common-header.vue"
    import Form from "../components/Center-form.vue"

    const loginUrl = "//" + window.location.host + "/center/ajaxlogin";
    // const loginUrl = "http://ac-onsg2j7w.clouddn.com/8fe6ec917ee31aee0843.json"

    export default {
        data () {
            return {
                Bus: new Vue()
            }
        },
        components: {
            "common-header": Header,
            "center-form" : Form
        },

        computed: {
            
        },
        methods: {
            
        },
        created () {
            document.title = "登录"
            this.Bus.$on("submit", params =>{
               axios.get(loginUrl,{params: params})
                    .then(response => {
                        const res = response.data
                        if(res.status == 1){
                            Message.success("登录成功")
                            setTimeout(() => {
                                window.location.href = res.data.go
                            }, 1500);
                        }else{
                            Message.error(res.info)
                        }
                    })
            })
        }
    }
</script>

<style>
    @import "../../static/css/login.css"
</style>