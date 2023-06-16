const router = require('express').Router()
const {loggedIn} = require('../middlewares/auth')

router.get('/', (req, res) => {
   res.header('Access-Control-Allow-Origin', 'https://summer-frontend.vercel.app')
   res.send('Hello World')
})

router.get('/dashboard', loggedIn, (req, res) => {
   res.header('Access-Control-Allow-Origin', 'https://summer-frontend.vercel.app')
   res.send('dashboard')
})

module.exports = router
