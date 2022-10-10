function routerResponse(option = {}) {
    return async function (ctx, next) {
        ctx.success = function (data, msg = '处理成功!') {
            ctx.type = option.type || 'json'
            ctx.body = {
                success:true,
                code: option.successCode || 0,
                msg: msg,
                data: data,
            }
        }

        ctx.fail = function (msg = '处理失败!', code) {
            ctx.type = option.type || 'json'
            ctx.body = {
                success:false,
                code: code || option.failCode || 99,
                msg: msg || option.successMsg || 'fail',
            }
            console.error(ctx.body)
        }
        await next()
    }
}
module.exports = routerResponse