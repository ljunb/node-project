/**
 * 回复中间件
 */
const getRawBody = require('raw-body')
      config = require('../config')
      parseXML = require('../utils/parseXML')
      replyXML = require('../utils/replyXML')

module.exports = () => async (ctx, next) => {
  const receiveXML = await getRawBody(ctx.req, {
    length: ctx.request.length,
    limit: '1mb',
    encoding: ctx.request.charset || 'utf-8'
  })
  console.log(`Receive: \n${receiveXML}`)

  const messageObj = await parseXML(receiveXML)
  console.log(messageObj)
  
  ctx.type = 'application/xml'
  ctx.body = replyXML(messageObj)
  // await ctx.render('xmltpl', {...messageObj, CreateTime: Date.now()})
}