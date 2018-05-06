/**
 * 微信公众号服务器入口文件
 */
const Koa = require('koa')
      koaViews = require('koa-views')
      path = require('path')
      config = require('./wechat/config')
      auth = require('./wechat/middlewares/auth')
      reply = require('./wechat/middlewares/reply')

// 设置自定义菜单
const createMenu = require('./wechat/utils/createMenu')
createMenu()

const app = new Koa()
// ejs用于渲染
app.use(koaViews(path.join(__dirname, './wechat/view'), {
  extension: 'ejs'
}))
// 微信认证
app.use(auth())
// 消息回复
app.use(reply())

app.listen(config.port, () => console.log(`Koa of wechat is listening in ${config.port}`))
app.on('error', error => console.log(error))