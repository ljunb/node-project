/**
 * 创建菜单工具类
 */
const axios = require('axios')
      config = require('../config')
      getAccessToken = require('../utils/accessToken')

module.exports = async () => {
  try {
    const result = await getAccessToken()
    if (result) {
      const url = `${config.api.menu}?access_token=${result.accessToken}`
      const response = await axios.post(url, config.menu)
      console.log(`[Middleware] create menu response: ${response}`)
    }
  } catch (error) {
    console.log(`[Middleware] create menu error: ${error}`)
  }
}