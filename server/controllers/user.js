const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const UserService = require('../services/user')

const handler_login = async (ctx, next) => {
  const { body } = ctx.request
  let result = {
    code: 0,
    message: '登录失败',
    token: null
  }

  if (body.name === '') {
    result.message = '用户名不能为空！'
  } else if (body.password === '') {
    result.message = '用户密码不能为空！'
  } else {
    const userInfo = await UserService.findUserByName(body.name)
    // 用户账号不存在
    if (!userInfo) {
      result.message = '用户不存在！'
    } else {
      console.log(bcrypt.hashSync(body.password))
      if (bcrypt.compareSync(body.password, userInfo.password)) {
        const userToken = {
          name: userInfo.name,
          id: userInfo.id
        }
        const secret = 'cj-node-project'
        const token = jwt.sign(userToken, secret)
        result = {
          token,
          code: 1,
          message: '登录成功！',
        }
      } else {
        result.message = '用户密码错误！'
      }
    }
  }

  ctx.body = result
}

const handler_register = async (ctx, next) => {
  const { body } = ctx.request
  let result = {
    code: 0,
    message: '注册失败',
  }

  if (body.name === '') {
    result.message = '用户名不能为空！'
  } else if (body.password === '') {
    result.message = '用户密码不能为空！'
  } else {
    try {
      const userInfo = {
        name: body.name,
        password: bcrypt.hashSync(body.password, bcrypt.genSaltSync())
      }
      const isCreateSuccess = await UserService.createUser(userInfo)
      if (isCreateSuccess) {
        const newUser = await UserService.findUserByName(body.name)
        const userToken = {
          name: newUser.name,
          id: newUser.id
        }
        const token = jwt.sign(userToken, 'cj-node-project')

        result = {
          token,
          code: 1,
          message: '注册成功'
        }
      } else {
        result.message = '注册失败'
      }
    } catch (error) {
      console.log(`[Controller_User] register handler error: ${error}`)
      result.message = '注册失败'
    }
  }

  ctx.body = result
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