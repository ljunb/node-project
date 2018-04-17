/**
 * 整合 controllers 到 路由的映射
 */
const fs = require('fs')
const router = require('koa-router')()

const setupMapping = mappingList => {
  for (const obj of mappingList) {
    const { path, method, handler } = obj
    switch (method) {
      case 'GET':
        router.get(path, handler)
        break
      case 'POST':
        router.post(path, handler)
        break
      case 'PUT':
        router.put(path, handler)
        break
      case 'DELETE':
        router.del(path, handler)
        break
      default:
        console.log(`Invalid method: ${method} with path: ${path}`)
        break
    }
  }
}

const setupControllers = dir => {
  const files = fs.readdirSync(`${__dirname}/../controllers`)
  const js_files = files.filter(file => file.endsWith('.js'))

  for (const file of js_files) {
    // mappingList 为每个文件中 module.exports 导出的路由 list
    const mappingList = require(`${__dirname}/../controllers/${file}`)
    setupMapping(mappingList)
  }
}

module.exports = dir => {
  const controllers_dir = dir || 'controllers'
  setupControllers(controllers_dir)
  return router.routes()
}