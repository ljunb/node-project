const OCRUploadService = require('../services/ocrupload')
const Busboy = require('busboy')
const fs = require('fs')
const path = require('path')

const mkdirsSync = dirname => {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}

const getSuffixName = fileName => {
  let nameList = fileName.split('.')
  return nameList[nameList.length - 1]
}

const handler_upload = async (ctx, next) => {
  let req = ctx.req
  let res = ctx.res
  let busboy = new Busboy({headers: req.headers})

  let filePath = path.join(__dirname, '/static/images')
  let mkdirResult = mkdirsSync(filePath)

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    let fileName = Math.random().toString(16).substr(2) + '.' + getSuffixName(filename)
    let _uploadFilePath = path.join(filePath, fileName)
    let saveTo = path.join(_uploadFilePath)

    file.pipe(fs.createWriteStream(saveTo))

    file.on('end', () => {
      ctx.body = {
        code: 1,
        message: '上传成功',
        data: {
          filePath: saveTo
        }
      }
    })
  })

  busboy.on('finish', () => {
    ctx.body = {
      code: 1,
      message: '上传成功',
    }
  })

  busboy.on('error', () => {

  })

  req.pipe(busboy)
}

module.exports = [
  {
    path: '/api/no-auth/orcupload',
    method: 'POST',
    handler: handler_upload,
  }
]