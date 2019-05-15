const { parse } = require('url')

module.exports = (req, res) => {
  const { query } = parse(req.url, true)
  const { name = 'World' } = query
  const secret = process.env.MY_API_KEY
  res.end(`Hello ${name}!`+secret)
}

