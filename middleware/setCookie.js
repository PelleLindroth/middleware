// res.setCookie(key, value) 
// => Ska sätta en "Set-Cookie"-header med rätt syntax.

const addSetCookie = (req, res, next) => {
  res.setCookie = function (key, value) {
    res.set("Set-Cookie", `${key}=${value}`)
  }
  next()
}

module.exports = { addSetCookie }