// const config = require('config')
const jwt = require('jsonwebtoken')

function makeAccessToken(user) {
  const payload = { userId: user._id, expiresIn: "15m" }
  const secret = process.env.JWT_ACCESS_SECRET
  const accessToken = jwt.sign(payload, secret)

  return accessToken
}

module.exports = makeAccessToken