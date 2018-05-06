/**
 * 获取token
 */
const axios = require('axios')
      fs = require('fs-extra')
      config = require('../config')
      
const accessTokenPath = `${__dirname}/../static/access_token.txt`

module.exports = async () => {
  try {
    // 看看本地有没token
    const latestToken = await fs.readFile(accessTokenPath, 'utf-8')
    // 已有 token
    if (latestToken) {
      const { accessToken, expireTime } = JSON.parse(latestToken)
      // 快要过期，获取下新的 token
      if (Date.now() + 900 * 1000 > expireTime) {
        const url = `${config.api.accessToken}?grant_type=client_credential&appid=${config.wechat.appID}&secret=${config.wechat.appSecret}`
        const { data } = await axios.get(url)
        const { access_token, expires_in } = data

        const newToken = {
          expireTime: expires_in,
          accessToken: access_token,
        }
        await fs.writeFile(accessTokenPath, JSON.stringify(newToken))
        return newToken
      }

      // 没有过期，直接返回
      return JSON.parse(latestToken)
    }

    return null
  } catch (error) {
    console.log(`[AccessToken] get access token error: ${error}`)
    return null
  }
}