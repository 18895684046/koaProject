const Router = require('koa-router')
const { BannerModel, ShopGoodsModel } = require('../db/mongooseModel')
const router = new Router()

// 获取 轮播图数据 
router.get('/banner', async (ctx, next) => {
    const res = await BannerModel.find()
    ctx.body = { data: res }
})

// 获取首页商品分类数据
router.get('/goodstype', async (ctx, next) => {
    const res = await ShopGoodsModel.find()
    ctx.body = { data: res }
})

module.exports = router