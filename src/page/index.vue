<template>
    <div>欢迎，这里是首页
        <input class="base-btn" @click="logout" type="button" value="退出登录">
    </div>
</template>

<script>

    import Vue from "Vue"
    import { Message } from 'element-ui'
    import axios from "axios"

    const logoutUrl = "//" + window.location.host + "/center/ajaxlogout";

    export default {
        data () {
            return {
                
            }
        },
        computed: {
            
        },
        methods: {
            logout () {
                axios.get(logoutUrl)
                    .then(response => {
                        const res = response.data
                        if(res.status == 1){
                            window.location.href = res.data.go
                        }
                    })
            }
        },
        created () {
            document.title = "登录"
        }
    }
</script>