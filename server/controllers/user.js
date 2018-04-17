const handler_login = (ctx, next) => {
  const { body } = ctx.request
  let result = {
    code: 0,
    message: '登录失败',
    data: {}
  }
  if (body.name === 'ljunb' && body.password === '123456') {
    result = {
      code: 1,
      message: '登录成功',
      data: {
        account: body.name,
        password: body.password
      }
    }
  } else if (body.name !== 'ljunb') {
    result.message = `用户名(${body.name})错误！`
  } else if (body.password !== '123456') {
    result.message = `密码(${body.password})错误！`
  }
  ctx.body = result
}

const handler_register = async (ctx, next) => {

}

module.exports = [
  {
    path: '/api/login',
    method: 'POST',
    handler: handler_login
  },
  {
    path: '/api/register',
    method: 'POST',
    handler: handler_register
  }
]