const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx, next) => {
    // ctx.cookies.get('fullname')   // 获取cookies
    // ctx.cookies.set('loaction','sh') // 设置 cookies
    await ctx.render("home",{username:"kerwind"}) // 自动去找 views/home.ejs  ==> 注意此处异步处理
})

module.exports = router