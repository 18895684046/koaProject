const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserType = {
    username: String,
    password: String,
    age: Number,
    avatar: String
}

const BannerType = {
    imgUrl: String
}

const ShopGoodsType = {
    iconUrl: String,
    text:String,
}


const UserModel = mongoose.model("user", new Schema(UserType))
const BannerModel = mongoose.model('banner', new Schema(BannerType))
const ShopGoodsModel = mongoose.model('goodstype', new Schema(ShopGoodsType))


// 模型user 将会对应 users 集合, 
module.exports = {
    UserModel,
    BannerModel,
    ShopGoodsModel
}
