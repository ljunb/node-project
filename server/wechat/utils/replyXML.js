
const eventHandler = message => {
  const { Event } = message
  if (Event === 'subscribe') {
    if (message.EventKey) {
      console.log('扫码进入')
    }
    const contentXML = '<Content><![CDATA[终于等到你！]]></Content>'
    return createXML(message, 'text', contentXML)
  } else if (Event === 'unsubscribe') {
    console.log('取关')
  }
}

const textHandler = message => {
  const contentXML = '<Content><![CDATA[Hello world!!!!]]></Content>'
  return createXML(message, 'text', contentXML)
}

const imageHandler = message => {
  const { MediaId } = message
  const contentXML = `
    <Image>
      <MediaId><![CDATA[${MediaId}]]></MediaId>
    </Image>
  `
  return createXML(message, MsgType, contentXML)
}

const voiceHandler = message => {
  const { MediaId, MsgType } = message
  const contentXML = `
    <Voice>
      <MediaId><![CDATA[${MediaId}]]></MediaId>
    </Voice>
  `
  return createXML(message, MsgType, contentXML)
}

const handlerMap = {
  'event': eventHandler,
  'text': textHandler,
  'image': imageHandler,
  'voice': voiceHandler,
}

const createXML = (message, msgType, contentXML) => {
  const { ToUserName, FromUserName } = message

  return `
  <xml>
    <ToUserName><![CDATA[${FromUserName}]]></ToUserName> 
    <FromUserName><![CDATA[${ToUserName}]]></FromUserName> 
    <CreateTime>${new Date().getTime()}</CreateTime> 
    <MsgType><![CDATA[${msgType}]]></MsgType> 
    ${contentXML}
  </xml>
  `
}

const replyXML = message => {
  const { ToUserName, FromUserName, MsgType = 'text' } = message
  const handler = handlerMap[MsgType] || handlerMap['text']
  return handler(message)
}

module.exports = replyXML