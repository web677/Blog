<template>
    <nav class="nav flex">
        <a class="nav-item flex-1" :class="{on: tab == 'home'}" href="javascript:;">首页</a>
        <a class="nav-item flex-1" :class="{on: tab == 'find'}" href="javascript:;">发现</a>
        <a class="nav-item flex-1" :class="{on: tab == 'user'}" href="javascript:;">我的</a>
    </nav>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        props: {
            tab: String
        },
        computed: {
            
        },
        methods: {
            
        }
    }
</script>
<style>
    @import "../../static/css/base.css"
</style>
<style scoped>
    .nav{
        width: 100%;
        height: 40px;
        justify-content: center;
        -webkit-box-align: center;
        background: #409EFF;
    }
    .nav-item{
        display: block;
        text-align: center;
        line-height: 20px;
        color: #fff;
        border-left: 1px solid rgba(255,255,255,0.6);
    }
    .nav-item:last-child{
        border-left: 0;
    }
    .nav-item.on,
    .nav-item:hover{
        background: #FA5555;
        border-left: 0;
        border-top: 10px solid #FA5555;
        border-bottom: 10px solid #FA5555;
    }
    .nav-item.on + .nav-item,
    .nav-item:hover + .nav-item{
        border-left: 0;
    }
</style>