const { Router } = require('express')

const router = Router()

router.use((req, res, next) => {
  const origin = req.header('origin')
  console.log(['CLIENT_URLS'].includes(origin))
  if (process.env.CLIENT_URLS.includes(origin) || !origin) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  }

  next()
})

module.exports = router
