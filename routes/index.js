const router = require('express').Router()
const {loggedIn} = require('../middlewares/auth')

router.get('/', (req, res) => {
   res.header('Access-Control-Allow-Origin', 'https://summer-frontend.vercel.app')
   res.header('Access-Control-Allow-Methods', 'GET, POST')
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
   res.send('Hello World')
})

router.get('/dashboard', loggedIn, (req, res) => {
   res.header('Access-Control-Allow-Origin', 'https://summer-frontend.vercel.app')
   res.header('Access-Control-Allow-Methods', 'GET, POST')
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
   res.send('dashboard')
})

module.exports = router
