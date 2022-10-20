const mongoose = require("mongoose")
const Schema = mongoose.Schema
// 用户模型
const UserType = {
    username: String,
    password: String,
    age: Number,
    avatar: String
}
// 轮播图模型
const BannerType = {
    imgUrl: String
}
// 商品分类模型
const ShopGoodsType = {
    iconUrl: String,
    text: String,
}

// 首页商品列表数据
const HomeGoodsListType = {
    title: String,
    desc: String,
    price: Number,
    imgUrl: String
}

// 获取分类的类别信息
const CategoryType = {
    cid:String,
    commonUsed:String,
    ptag:String,
    level:Number,
    name: String, 
}
 
// 生成模型
const UserModel = mongoose.model("user", new Schema(UserType))
const BannerModel = mongoose.model('banner', new Schema(BannerType))
const ShopGoodsModel = mongoose.model('goodstype', new Schema(ShopGoodsType))
const HomeGoodsListModel = mongoose.model('homegoodslist', new Schema(HomeGoodsListType))
const CategoryModel = mongoose.model('category', new Schema(CategoryType))

// 模型user 将会对应 users 集合, 

module.exports = {
    UserModel,
    BannerModel,
    ShopGoodsModel,
    HomeGoodsListModel,
    CategoryModel
}
