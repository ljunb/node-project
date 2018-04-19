const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const jwt = require('koa-jwt')
const controller = require('./middlewares/controller')
const config = require('./config')

const app = new Koa()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    if (error.status === 401) {
      // ctx.status = 401
      ctx.body = {
        code: 0,
        token: null,
        message: '受保护的资源，需在报文头部添加授权！'
      }
    } else {
      throw error
    }
  }
})

app.use(bodyparser())
app.use(logger())
app.use(jwt({secret: config.jwt_secret}))
app.use(controller())

app.on('error', (err, ctx) => console.log(`Koa is run with error: ${err}`))
app.listen(3000, () => console.log('Koa is listening in 3000'))