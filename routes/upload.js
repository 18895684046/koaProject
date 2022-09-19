const Router = require("koa-router")
const getDBConfig = require("../utils/dbConfig")
const router = new Router()
const mysql2 = require('mysql2')
const multer = require('@koa/multer');
const fs = require('fs')
const upload = multer({ dest: 'public/uploads/' })

router.post('/', upload.single('file'), async (ctx, next) => {
    const { username, alias } = ctx.request.body
    let file = ctx?.file
    try {
        let fileinfo = {};
        let path = "public/uploads/" + Date.now().toString() + "_" + file.originalname;
        fs.renameSync("./public/uploads/" + file.filename, path);
        //获取文件基本信息
        fileinfo.type = file.mimetype;
        fileinfo.name = file.originalname;
        fileinfo.size = file.size;
        fileinfo.path = path;

        const config = getDBConfig()
        const promisePool = mysql2.createPool(config).promise()
        if (username !== 'null') {
            await promisePool.query(`insert into images (name,alias,avatar) values (?,?,?)`, [username, alias, path])
            ctx.body = {
                ok: 1,
                info: "add user success",
                data: fileinfo,
            }
        } else {
            ctx.body = {
                ok: -1,
                info: "username 不能为空",
            }
        }
    } catch (error) {
        console.error(error)
        ctx.body = {
            ok: 0,
            info: error,
        }
    }
})

router.get('/', async (ctx, next) => {
    const config = getDBConfig()
    const promisePool = mysql2.createPool(config).promise()
    const data = await promisePool.query(`select * from images`)
    ctx.body = {
        ok: 1,
        info: "查询成功",
        data: data[0],
    }
})


router.del('/', async (ctx, next) => {
    const { id } = ctx.request.body
    const config = getDBConfig()
    const promisePool = mysql2.createPool(config).promise()
    const info = await promisePool.query(`select * from images where id = ?`, [id])
    console.log(info[0]);
    if (info[0].length) {
        const data = await promisePool.query(`delete from images where id = ?`, [id])
        ctx.body = {
            info: "删除成功",
            ok: 1
        }
    } else {
        ctx.body = {
            info: 'empty',
            ok: 0
        }
    }
})

module.exports = router