<template>
    <form class="base-form login-form" action="javascript:;">
        <h3 class="base-title">Regist</h3>
        <input class="base-input" v-model="username" type="text" placeholder="请输入用户名" maxlength="20">
        <input class="base-input" v-model="password" type="password" placeholder="请输入密码" maxlength="20">
        <input class="base-input" v-model="repassword" type="password" placeholder="请再次输入密码" maxlength="20">
        <div class="link-box flex">
            <router-link class="base-link flex-1" to="/login">登录</router-link>
        </div>
        <button class="base-btn" @click="regist">注册</button>
    </form>
</template>

<script>
    export default {
        data () {
            return {
                username: "",
                password: "",
                repassword: ""
            }
        },
        computed: {
            
        },
        methods: {
            regist () {
                if(this.username == ""){
                    alert("请输入用户名！")
                    return;
                }
                if(this.password == ""){
                    alert("请输入输入密码！")
                    return;
                }
                if(this.repassword == ""){
                    alert("请确认密码")
                    return;
                }
                if(this.password !== this.repassword){
                    alert("两次密码不一致！")
                    return;
                }
                alert("注册成功！")
                window.location.href = "index"
            }
        },
        created (){
            document.title = "注册"

        }
    }
</script>

<style>
    @import "../../static/css/login.css"
</style>