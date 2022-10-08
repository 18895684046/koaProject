const Router = require('koa-router')
const UserModel = require('../db/mongooseModel')
const router = new Router()

router.get('/', async (ctx, next) => {
    // ctx.cookies.get('fullname')   // 获取cookies
    // ctx.cookies.set('loaction','sh') // 设置 cookies
    // await ctx.render("home", { username: "ke1rwind" }) // 自动去找 views/home.ejs  ==> 注意此处异步处理
     ctx.body = 'hahaha'

    // await UserModel.find()
})

module.exports = router