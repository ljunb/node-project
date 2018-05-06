const xml2js = require('xml2js')

module.exports = xml => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, { trim: true, explicitArray: false, ignoreAttrs: true }, (err, result) => {
      if (err) {
        reject(err)
      }
      resolve(result.xml)
    })
  })
}