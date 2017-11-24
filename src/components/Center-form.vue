
<template>
    <form class="base-form login-form" action="javascript:;" autocomplete="off">
        <h3 class="base-title">{{formData.title}}</h3>
        <input class="base-input" type="text" placeholder="请输入用户名" maxlength="20" v-model="username">
        <input class="base-input" type="password" placeholder="请输入密码" maxlength="20" v-model="password">
        <input v-if="type !== 'login'" class="base-input" type="password" placeholder="请再次输入密码" maxlength="20" v-model="repassword">
        <div class="link-box flex">
            <router-link v-if="type === 'login'" class="base-link flex-1" to="/regist">忘记密码</router-link>
            <router-link class="base-link flex-1" :to="formData.backLink">{{formData.backName}}</router-link>
        </div>
        <button class="base-btn" @click="submit">{{formData.btnName}}</button>
    </form>
</template>


<script>
    import Vue from 'vue'
    import { Message } from 'element-ui'
    import { InputValidation } from './InputValidate.js'

    export default {
        data () {
            return {
                username: "",
                password: "",
                repassword: "",
                postData: {}
            }
        },
        props: {
            type: {
                type: String,
                required: true,
                default: "login"
            }
        },
        computed: {
            formData(){
                return this.type == "login" 
                ? {
                    title: "Login",
                    backName: "注册",
                    backLink: "/center/regist",
                    btnName: "登录"
                } : {
                    title: "Regist",
                    backName: "登录",
                    backLink: "/center/login",
                    btnName: "注册"
                }
            }
        },
        methods: {
            submit (){

                if(!this.username){
                    Message.error("请输入用户名！")
                    return
                }

                if(!InputValidation.isName(this.username)){
                    Message.error("用户名请输入汉字或英文字母！")
                    return
                }

                if(!this.password){
                    Message.error("请输入密码！")
                    return
                }

                if(!InputValidation.isPwd(this.password)){
                    Message.error("密码请输入6-12位数字英文字母或下划线！")
                    return
                }

                if(this.type != "login" && this.password != this.repassword){
                    Message.error("两次密码不一致！")
                    return
                }

                this.postData = {
                    username: this.username,
                    password: this.password
                }

                if(this.type == "regist"){
                    this.postData.repassword = this.repassword
                }

                this.$parent.Bus.$emit('submit', this.postData)
            }
        }
    }
</script>

<style>
    @import "../../static/css/base.css"
</style>
<style scoped>

    body{
        background: url(../../static/images/login-bg.png) center center no-repeat;
        background-size: 800px;
    }

    .link-box{
        width: 80%;
        margin: -10px auto 10px;
    }

    .link-box .base-link:last-child{text-align: right;}


</style>