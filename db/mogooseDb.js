
const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/koa_shop_project'

mongoose.connect(DB_URL)
//插入集合和数据,数据库 koa_shop_project 会自动创建

mongoose.connection.on('connected',function() {
    console.log('Mongoose connection open to '+DB_URL);
 });
 /**
 * 连接异常 error 数据库连接错误
 */
 mongoose.connection.on('error',function(err) {
   console.log('Mongoose connection error: '+ err);
 });
 /**
 * 连接断开 disconnected 连接异常断开
 */
 mongoose.connection.on('disconnected',function() {
   console.log('Mongoose connection disconnected');
 });
  
 module.exports = mongoose
