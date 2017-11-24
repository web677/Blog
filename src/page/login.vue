

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
import Header from "../components/Common-header.vue"
import Form from "../components/Center-form.vue"
import axios from "axios"

axios.interceptors.response.use( res => {return res.data})

const loginUrl = "http://127.0.0.1:3000/center/ajaxlogin";

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
            this.Bus.$on("submit", function(params){
               axios.get(loginUrl,{params: params})
                    .then(function(res){
                        console.log(res)
                    })
            })
        }
    }
</script>

<style>
    @import "../../static/css/login.css"
</style>