const { parse } = require('url')

module.exports = (req, res) => {
  const { query } = parse(req.url, true)
  const { name = 'World' } = query
  const secret = process.env.MY_API_KEY
  const region = process.env.NOW_REGION
  res.end(`Hello ${name}!`+secret+region)
}

