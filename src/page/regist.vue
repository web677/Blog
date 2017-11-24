

<template>
    <div>
        <common-header
            tab="user"
        />
        <center-form 
            type="regist"
        />
    </div>

</template>

<script>
import Vue from "Vue"
import Header from "../components/Common-header.vue"
import Form from "../components/Center-form.vue"

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
            document.title = "注册"
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