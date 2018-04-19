const mock = require('../config/mock')

const getHomeInfo = () => {
  // use mock
  return new Promise(resolve => resolve(mock.articleList))
}

module.exports = {
  getHomeInfo
}