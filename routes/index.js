const homeRouter = require('./home')
const Router = require('koa-router')
const router = new Router()

// ctx === content 上下文
// 统一加上前缀
// router.prefix('/api')

// 先注册成路由级中间件
router.use('/home', homeRouter.routes(), homeRouter.allowedMethods())

// 路由重定向
// router.redirect('/', '/home')

module.exports = router