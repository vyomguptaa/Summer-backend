require('dotenv').config()
const config = {
   dbUrl: process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost/twitter-web-clone',
   // dbUrl: 'mongodb://localhost/twitter-web-clone',
   port: process.env.PORT || 3000,
   // port: 3000,
   sessionSecret: process.env.SESSION_SECRET,
}

module.exports = config