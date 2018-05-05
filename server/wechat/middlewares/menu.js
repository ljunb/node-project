/**
 * 创建菜单中间件
 */
const config = require('../config')
      getAccessToken = require('../utils/accessToken')

const menu = () => async (ctx, next) => {
  try {
    const result = await getAccessToken()
    if (result) {
      const url = `${config.api.menu}?access_token=${result.accessToken}`
      const response = await axios.post(url, menuOption)
      console.log(`[Middleware] create menu response: ${JSON.stringify(response)}`)
    }
  } catch (error) {
    console.log(`[Middleware] create menu error: ${error}`)
  }
  
  await next()
}

module.exports = menu