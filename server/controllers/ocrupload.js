const OCRUploadService = require('../services/ocrupload')

const handler_upload = async (ctx, next) => {
  const { body } = ctx.request

}

module.exports = [
  {
    path: '/api/no-auth/orcupload',
    method: 'POST',
    handler: handler_upload,
  }
]