const crypto = require('crypto')

module.exports = (timestamp, nonce, token) => {
  const hash = crypto.createHash('sha1')
  const arr = [token, timestamp, nonce].sort().join('')
  hash.update(arr)
  return hash.digest('hex')
}