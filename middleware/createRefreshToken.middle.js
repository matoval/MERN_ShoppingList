// const config = require('config')
const jwt = require('jsonwebtoken')

function makeRefreshToken(user) {
  const payload = { userId: user._id, expiresIn: "7d" }
  const secret = (process.env.JWT_REFRESH_SECRET + user.hashPW)
  const refreshToken = jwt.sign(payload, secret)

  return refreshToken
}

module.exports = makeRefreshToken