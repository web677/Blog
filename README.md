# Blog

### 练手项目

* 前端：Webpack + Vue2 + Vue Router；
* 后端：NodeJs + Koa2 + MongoDB
* 服务器：Ubuntu 14.04 + Nignx 1.4.6 + pm2

### 部署
* DEVELOP
    * 采用vue-cli脚手架打包的服务器 + 热替换配置，单一入口为SPA页面，通过vue-router配置实现路由跳转
    * 引入ElementUI部分组件，Message/Loading等
    * ajax库采用axios
* PRODUCT
    * 前端采用多个SPA页面，同一SPA下不同页面采用vue-router跳转，不同SPA之间通过服务端路由跳转
    * 服务端操作系统Ubuntu14.04，采用nginx反向代理监听3000端口跳转到blog.xxx.com
    * Koa2 + Koa2-Cors + Koa-Router + Koa-Static处理请求，主入口做路由分发，MVC，C接收请求并调用相应Model处理并返回结果，M处理请求并返回结果，V为webpack打包后静态html文件
    * 通过pm2进行进程管理

### 功能
* 登录
    * 前端格式校验，通过后发起请求，成功后跳转到指定页，失败则提示错误
    * 服务端格式校验，通过则前往数据库查询用户是否存在，不存在返回错误，存在则校验用户名密码并返回结果，登录成功则session记录登录态到redis
* 注册
    * 前端格式校验，通过后发起请求，成功后跳转到指定页，失败则提示错误
    * 服务端格式校验，通过则前往数据库查询用户是否存在，不存在则添加到数据库保存并返回成功，存在则返回错误
* 职位爬虫
    * 这个功能临时起意，女票在看工作机会，就顺手写了个小爬虫，智联招聘，财务（不含出纳），一到三年工作经验，上海，全职
    * 前端页面使用ElementUI的Table/Message/Loading组件
    * 服务端superagent + cheerio，get拿到智联搜索结果页面（10页）并通过cheerio（nodejs下的轻量jquery）分析页面结果，取到需要的信息含：职位名称、薪资、公司名、规模、地点、职位ID、职位链接
    * 支持收藏职位，以职位ID为标识

### 更多功能，慢慢试着练练手