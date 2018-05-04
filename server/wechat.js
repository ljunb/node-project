/**
 * 微信公众号服务器入口文件
 */
const Koa = require('koa')
      getRawBody = require('raw-body')
      parseXML = require('./wechat/utils/parseXML')
      config = require('./wechat/config')
      auth = require('./wechat/middlewares/auth')
      replyXML = require('./wechat/utils/replyXML')

const app = new Koa()

app.use(auth())

app.use(async (ctx, next) => {
  const receiveXML = await getRawBody(ctx.req, {
    length: ctx.request.length,
    limit: '1mb',
    encoding: ctx.request.charset || 'utf-8'
  })
  console.log(`Receive: \n${receiveXML}`)

  const messageObj = await parseXML(receiveXML)
  console.log(messageObj)
  
  ctx.type = 'application/xml'
  ctx.body = replyXML(messageObj)
})

app.listen(config.port, () => console.log(`Koa of wechat is listening in ${config.port}`))
app.on('error', error => console.log(error))