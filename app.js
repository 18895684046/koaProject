const Koa = require("koa")
const app = new Koa()
const router = require('./routes/index')
const static = require('koa-static')
const views = require('koa-views')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const JWT = require("./utils/JWT")
const cors = require('koa2-cors')
const ModelDb = require('./db/mogooseDb')

// 处理静态资源
app.use(static(path.join(__dirname, 'public')))
// app.use(KoaStatic(__dirname + '/public'));               //这两种写法都可以
// app.use(KoaStatic(path.join(__dirname + '/public')))  //这两种写法都可以

// 加载模板引擎
app.use(views(path.join(__dirname, 'views'), {
    extension: 'ejs'
}))
// 使用ctx.body解析中间件
app.use(bodyParser())

// 处理跨域和 前后端分离时的 配置，不然前端拦截器获取不到 Authorization
app.use(cors({ credentials: true, exposeHeaders: ['Authorization'] }))

// session 配置
// app.use(session({
//     key: "ZZ_SESSION_ID",
//     cookie: {
//         maxAge: 1000 * 60 * 60
//     }
// }))

// // session 拦截 注意此处是异步的
// app.use(async (ctx, next) => {
//     if (ctx.url.includes('login')) {
//         await next()
//         return
//     }
//     if (ctx.session.user) {
//         // 重新设置一下最新的 session
//         ctx.session.myDate = Date.now()
//         await next()
//     } else {
//         ctx.redirect('/login')
//     }
// })

// token 配置

app.use(async (ctx, next) => {
    //排除login相关的路由和接口
    if (ctx.url.includes('login')) {
        await next()
        return
    }
    const token = ctx.headers["authorization"]?.split(" ")[1]
    // 代表是请求接口
    if (token) {
        const payload = JWT.verify(token)
        if (payload) {
            //  重新计算 token 过期时间
            const newToken = JWT.generate({
                _id: payload._id,
                username: payload.username
            }, '1d')
            ctx.set('Authorization', newToken)
            await next()
        } else {
            ctx.status = 401
            ctx.body = { errCode: -1, errInfo: "token过期" }
        }
    } else {
        // 代表是普通的页面
        await next()
    }
})


// 应用级中间件
app.use(router.routes()).use(router.allowedMethods())

// app.use((ctx, next) => {
//     ctx.response.body = "hello world"
// })

app.listen(3004, () => {
    console.log("服务器运行在3004端口");
})


