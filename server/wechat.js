/**
 * 微信公众号服务器入口文件
 */
const Koa = require('koa')
      getRawBody = require('raw-body')
      getSignature = require('./wechat/utils/signature')
      parseXML = require('./wechat/utils/parseXML')

const config = {
  wechat: {
    appID: 'wxaea3d9250f2fa460',
    appSecret: '45d8281ff37fa611a3259b1573f426db',
    token: 'nodeprojectwechat',
  },
  port: 9003
}

const app = new Koa()

app.use(async (ctx, next) => {
  const { signature, nonce, timestamp, echostr } = ctx.query
  const token = config.wechat.token

  if (ctx.method === 'GET') {
    if (signature === getSelection(timestamp, nonce, token)) {
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
    const replyXML = `
    <xml>
      <ToUserName><![CDATA[${formatted.FromUserName}]]></ToUserName> 
      <FromUserName><![CDATA[${formatted.ToUserName}]]></FromUserName> 
      <CreateTime>${new Date().getTime()}</CreateTime> 
      <MsgType><![CDATA[text]]></MsgType> 
      <Content><![CDATA[Hello World！]]></Content> 
    </xml>
    `
    return ctx.body = replyXML
  }
})

app.listen(config.port, () => console.log(`Koa of wechat is listening in ${config.port}`))
app.on('error', error => console.log(error))