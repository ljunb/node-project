const config = require('../config')
      getSignature = require('../utils/signature')

const auth = () => async (ctx, next) => {
  const { signature, nonce, timestamp, echostr } = ctx.query
  const token = config.wechat.token 

  if (signature !== getSignature(timestamp, nonce, token)) {
    ctx.status = 401
    ctx.body = 'Invalid signature'
  } else {
    if (ctx.method === 'GET') {
      // 用于微信公众号平台的验证
      return ctx.body = echostr
    }
    // POST 时即为接收到消息
    await next()
  }
}

module.exports = auth