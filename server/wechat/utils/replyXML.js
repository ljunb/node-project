
const eventHandler = message => {
  const { Event } = message
  if (Event === 'subscribe') {
    if (message.EventKey) {
      console.log('扫码进入')
    }
    return '<Content><![CDATA[终于等到你！]]></Content>'
  } else if (Event === 'unsubscribe') {
    console.log('取关')
  }
}

const textHandler = message => {
  return '<Content><![CDATA[Hello world!!!!]]></Content>'
}

const imageHandler = message => {
  const { MediaId } = message
  return `
    <Image>
      <MediaId><![CDATA[${MediaId}]]></MediaId>
    </Image>
  `
}

const voiceHandler = message => {
  const { MediaId } = message
  return `
    <Voice>
      <MediaId><![CDATA[${MediaId}]]></MediaId>
    </Voice>
  `
}

const handlerMap = {
  'event': eventHandler,
  'text': textHandler,
  'image': imageHandler,
  'voice': voiceHandler,
}

const replyXML = message => {
  const { ToUserName, FromUserName, MsgType = 'text' } = message
  const handler = handlerMap[MsgType] || handlerMap['text']
  const contentXML = handler(message)

  const xmlResult = `
  <xml>
    <ToUserName><![CDATA[${FromUserName}]]></ToUserName> 
    <FromUserName><![CDATA[${ToUserName}]]></FromUserName> 
    <CreateTime>${new Date().getTime()}</CreateTime> 
    <MsgType><![CDATA[text]]></MsgType> 
    ${contentXML}
  </xml>
  `
  return xmlResult
}

module.exports = replyXML