const Router = require('koa-router')
const { BannerModel, ShopGoodsModel, HomeGoodsListModel } = require('../db/mongooseModel')
const router = new Router()

// 获取 轮播图数据 
router.get('/banner', async (ctx, next) => {
    const res = await BannerModel.find()
    ctx.success(res)
})

// 获取首页商品分类数据
router.get('/goodstype', async (ctx, next) => {
    const res = await ShopGoodsModel.find()
    ctx.success(res)
})

// 获取首页商品列表详情
router.get('/shoplist', async (ctx, next) => {
    const res = await HomeGoodsListModel.find()
    ctx.success(res)
})

// 根据 id 获取商品详情
router.get('/shoplist/:id', async (ctx, next) => {
    const curId = ctx.params?.id
    const res = await HomeGoodsListModel.findOne({ _id: curId.toString() })
    ctx.success(res)
})

module.exports = router