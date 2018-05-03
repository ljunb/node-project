const crypto = require('crypto')

const getSignature = (timestamp, nonce, token) => {
  const hash = crypto.createHash('sha1')
  const arr = [token, timestamp, nonce].sort().join('')
  hash.update(arr)
  return hash.digest('hex')
}

module.exports = getSignature