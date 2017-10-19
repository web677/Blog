
<template>
    <form class="base-form login-form" action="javascript:;">
        <h3 class="base-title">Login</h3>
        <input class="base-input" v-model="username" type="text" placeholder="请输入用户名" maxlength="20">
        <input class="base-input" v-model="password" type="password" placeholder="请输入密码" maxlength="20">
        <div class="link-box flex">
            <router-link class="base-link flex-1" to="/regist">忘记密码</router-link>
            <router-link class="base-link flex-1" to="/regist">注册</router-link>
        </div>
        <button class="base-btn" @click="login">登录</button>
    </form>
</template>


<script>
    export default {
        data () {
            return {
                username: "",
                password: ""
            }
        },
        computed: {
            
        },
        methods: {
            login () {
                if(this.username == ""){
                    alert("请输入用户名！")
                    return;
                }
                if(this.password == ""){
                    alert("请输入输入密码！")
                    return;
                }

                let confirmHandler = confirm("用户名：" + this.username + "\n密码：" + this.password)
                if(confirmHandler){
                    alert("登录成功！")
                    window.location.href = "index"
                }
            }
        },
        created () {
            document.title = "登录"
        }
    }
</script>

<style>
    @import "../../static/css/login.css"
</style>