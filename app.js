const express = require('express')
const { parseCookie } = require('./middleware/parseCookie')
const { addSetCookie } = require('./middleware/setCookie')
const app = express()
const PORT = 5000

app.use(parseCookie)
app.use(addSetCookie)

app.get('/tennis', (req, res) => {
  res.setCookie('tennis', 'badminton')
  res.send('Tennis')
})

app.get('/', (req, res) => {
  console.log(req.cookies);
  res.setCookie('one', 'two')
  res.send('Hi')
})

app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`);
})