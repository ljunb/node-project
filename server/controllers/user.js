const handler_login = (ctx, next) => {
  ctx.body = '<h1>login</h1>'
}

module.exports = [
  {
    path: '/',
    method: 'GET',
    handler: handler_login
  }
]