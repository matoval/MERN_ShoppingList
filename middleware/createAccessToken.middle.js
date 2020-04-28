const config = require('config')
const jwt = require('jsonwebtoken')

function makeAccessToken(user) {
  const payload = { userId: user._id, expiresIn: "15m" }
  const secret = config.get("jwtAccessSecret")
  const accessToken = jwt.sign(payload, secret)

  return accessToken
}

module.exports = makeAccessToken