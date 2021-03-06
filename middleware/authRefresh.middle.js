// const config = require('config')
const jwt = require('jsonwebtoken')

function authRefresh(req, res, next) {
  const token = req.header('x-refresh-token')

  if (!token) res.status(401).json({msg: 'No token, authorization denied'})
  try{
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
    req.user = decoded
    next()
  } catch(e) {
    res.status(400).json({msg: 'Token is not valid'})
  }
}

module.exports = authRefresh