const xml2js = require('xml2js')

const parseXML = xml => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, { trim: true, explicitArray: false, ignoreAttrs: true }, (err, result) => {
      if (err) {
        return reject(err)
      }
      resolve(result.xml)
    })
  })
}

module.exports = parseXML