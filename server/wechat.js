/**
 * 微信公众号服务器入口文件
 */
const Koa = require('koa')
      getRawBody = require('raw-body')
      getSignature = require('./wechat/utils/signature')
      parseXML = require('./wechat/utils/parseXML')
      config = require('./wechat/config')
      replyXML = require('./wechat/utils/replyXML')

const app = new Koa()

app.use(async (ctx, next) => {
  const { signature, nonce, timestamp, echostr } = ctx.query
  const token = config.wechat.token

  if (ctx.method === 'GET') {
    if (signature === getSignature(timestamp, nonce, token)) {
      return ctx.body = echostr
    }
    ctx.status = 401
    ctx.body = 'Invalid signature'
  } else if (ctx.method === 'POST') {
    if (signature !== getSignature(timestamp, nonce, token)) {
      ctx.status = 401
      return ctx.body = 'Invalid signature'
    }

    const xml = await getRawBody(ctx.req, {
      length: ctx.request.length,
      limit: '1mb',
      encoding: ctx.request.charset || 'utf-8'
    })
    console.log(xml)
    const formatted = await parseXML(xml)
    console.log(formatted)
    
    ctx.type = 'application/xml'
    ctx.body = replyXML(formatted)
  }
})

app.listen(config.port, () => console.log(`Koa of wechat is listening in ${config.port}`))
app.on('error', error => console.log(error))