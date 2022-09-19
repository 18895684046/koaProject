const Router = require("koa-router")
const JWT = require("../utils/JWT.js")
const router = new Router()

router.post('/', (ctx, next) => {
    ctx.body = ['11', 22, 333]
})
    .put("/:id", (ctx, next) => {
        // 获取参数
        console.log(ctx.params)
        ctx.body = {
            ok: 1,
            info: 'put user success'
        }
    })
    .del('/:id', (ctx, next) => {
        ctx.body = {
            ok: 1,
            info: "del user success"
        }
    })

router.post('/login', (ctx, next) => {
    const { username, password } = ctx.request.body
    console.log(username, password,typeof password,'按时发达');
    if (username == 'zz' && password == 123) {
            console.log('11');
        // 设置 sessionId
        // ctx.session.user = {
        //     username:'张争'
        // }

        // 登录成功设置 token
        const token = JWT.generate({
            _id: '1111',
            username: "zhangzheng"
        }, '1d')

        // token  返回在 header
        ctx.set('Authorization', token)

        ctx.body = {
            ok: 1,
            info: '登录成功！',
        }
    } else {
        ctx.body = {
            ok: 0,
            info: '登录失败！'
        }
    }
})



module.exports = router