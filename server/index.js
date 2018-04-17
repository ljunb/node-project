const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const controller = require('./middlewares/controller')

const app = new Koa()
app.use(bodyparser())
app.use(logger())
app.use(controller())

app.listen(3000, () => console.log('Koa is listening in 3000'))