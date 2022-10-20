const Router = require('koa-router')
const { CategoryModel } = require('../db/mongooseModel')
const router = new Router()

// 获取 类别数据 
router.get('/category', async (ctx, next) => {
    const res = await CategoryModel.find()
    ctx.success(res)
})

module.exports = router

