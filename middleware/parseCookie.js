const { cookieParser } = require('../utils/cookieParser')

const parseCookie = (req, res, next) => {
  if (req.headers.cookie) {
    req.cookies = cookieParser(req.headers.cookie)
  }
  next()
}

module.exports = { parseCookie }