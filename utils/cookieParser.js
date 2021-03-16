function cookieParser(cookieString) {

  const entryArray = cookieString.split('; ')
  const cookieObject = entryArray.reduce((acc, value) => {
    let [key, val] = value.split('=')
    return { ...acc, [key]: val }
  }, {})

  return cookieObject

}

module.exports = { cookieParser }