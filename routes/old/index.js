const userRouter = require('./user.js')
const listRouter = require('./list.js')
const homeRouter = require('./home')
const loginRouter = require('./login')
const mysqlRouter = require('./mysql')
const uploadRouter = require('./upload')
const Router = require('koa-router')
const router = new Router()

// ctx === content 上下文
// 统一加上前缀
// router.prefix('/api')

// 先注册成路由级中间件
// router.use('/user', userRouter.routes(), userRouter.allowedMethods())
// router.use('/list', listRouter.routes(), listRouter.allowedMethods())
// router.use('/home', homeRouter.routes(), homeRouter.allowedMethods())
// router.use('/login', loginRouter.routes(), loginRouter.allowedMethods())
// router.use('/mysql', mysqlRouter.routes(), mysqlRouter.allowedMethods())
// router.use('/upload', uploadRouter.routes(), uploadRouter.allowedMethods())

router.use('/home', homeRouter.routes(), homeRouter.allowedMethods())

// 路由重定向
// router.redirect('/', '/home')

module.exports = router