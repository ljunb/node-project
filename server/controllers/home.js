const HomeService = require('../services/home')

const handler_homeInfo = async (ctx, next) => {
  let result = {
    code: 0,
    message: '请求首页数据失败',
    data: null
  }
  try {
    const homeInfo = await HomeService.getHomeInfo()
    if (homeInfo) {
      result = {
        code: 1,
        message: '请求成功',
        data: homeInfo
      }
    } else {
      result.message = '首页数据不存在'
    }
  } catch (error) {
    result.message = '请求出错'
  }
  ctx.body = result
}

module.exports = [
  {
    path: '/api/no-auth/homeInfo',
    method: 'GET',
    handler: handler_homeInfo
  }
]