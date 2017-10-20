const Koa = require("koa")
const fs = require("fs")
const app = new Koa()

app.use(async (ctx, next) => {
    	let reqPath = ctx.path
	if(reqPath == "/" || reqPath == "/login" || reqPath == "/regist"){
        	 ctx.response.type = 'html';
         	 ctx.response.body = fs.createReadStream('./dist/index.html');
    	}
	
    	if(/\/static/.test(reqPath) && /.css$/.test(reqPath)){
		ctx.response.type = "text/css"
		ctx.response.body = fs.createReadStream("./dist" + reqPath)
	}

	if(/\/static/.test(reqPath) && /.js$/.test(reqPath)){
                ctx.response.type = "application/javascript"
                ctx.response.body = fs.createReadStream("./dist" + reqPath)
        }

	if(/\/static/.test(reqPath) && /.png$/.test(reqPath)){
                ctx.response.type = "image/png"
                ctx.response.body = fs.createReadStream("./dist" + reqPath)
        }
})


app.listen(3000)

