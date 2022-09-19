const Router = require("koa-router")
const router = new Router()
const mysql2 = require('mysql2')
const port = 9000
const getDBConfig = require('../utils/dbConfig')

router.get('/', async (ctx, next) => {

    // 创建连接池 ，进行操作
    const config = getDBConfig()
    const promisePool = mysql2.createPool(config).promise()
    // const name = 'bbb'

    // let user = await promisePool.query('select * from students where name = ? order  by score desc limit 2', [name]);
    // let user = await promisePool.query('select * from students order  by score desc');
    // console.log(user[0], 'fff');

    // promisePool.query('INSERT INTO `students`(`id`,`name`,`score`, `gender`,`class_id`) VALUES (?,?,?,?,?)',[null,"kerwin",100,"2",2]);
    let user = await promisePool.query(`insert into students (name,score,gender,class_id) values (?,?,?,?)`, ['张争', 40, 2, 3])
    console.log(user);
    ctx.body = {
        data: user[0]
    }

})



module.exports = router