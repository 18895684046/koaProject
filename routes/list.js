const Router = require("koa-router")
const getDBConfig = require("../utils/dbConfig")
const router = new Router()
const mysql2 = require('mysql2')

router.get('/',async (ctx, next) => {
      // 创建连接池 ，进行操作
      const config = getDBConfig()
      const promisePool = mysql2.createPool(config).promise()
      let user = await promisePool.query('select * from students order  by score desc');
      console.log(user[0],'ff');
      ctx.body = {
        data:user[0],
        success:true
      }
})
    .put("/list/:id", (ctx, next) => {
        // 获取参数
        console.log(ctx.params)
        ctx.body = {
            ok: 1,
            info: 'put list success'
        }
    })
    .del('/list/:id', (ctx, next) => {
        ctx.body = {
            ok: 1,
            info: "del list success"
        }
    })
module.exports = router