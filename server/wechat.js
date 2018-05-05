/**
 * 微信公众号服务器入口文件
 */
const Koa = require('koa')
      config = require('./wechat/config')
      auth = require('./wechat/middlewares/auth')
      menu = require('./wechat/middlewares/menu')
      reply = require('./wechat/middlewares/reply')

const app = new Koa()

app.use(auth())
app.use(menu())
app.use(reply())

app.listen(config.port, () => console.log(`Koa of wechat is listening in ${config.port}`))
app.on('error', error => console.log(error))