const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 0

const UserSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         minlength: 2,
         required: true,
      },
      handle: {
         type: String,
         unique: true,
         required: true,
      },
      email: {
         type: String,
         unique: true,
         required: true,
      },
      password: {
         type: String,
         minlength: 6,
         required: true,
      },
      profileImage: {
         // add profile pic through upload
         type: String,
         // default profile pic if user doesn't upload
         default: 'https://raw.githubusercontent.com/vyomguptaa/portfolio/master/assets/images/vyom.png',
      },
      bio: String,
      location: String,
      website: String,
      createdAt: Date,
      followers: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            autopopulate: {
               maxDepth: 3,
            },
         },
      ],
      following: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            autopopulate: {
               maxDepth: 3,
            },
         },
      ],
      tweets: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
            autopopulate: {
               maxDepth: 4,
            },
         },
      ],
      likes: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
            autopopulate: {
               maxDepth: 3,
            },
         },
      ],
      replies: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
            autopopulate: {
               maxDepth: 2,
            },
         },
      ],
   },
   {timestamps: true}
)

UserSchema.pre('save', function (next) {
   const user = this
   if (!user.isModified('password')) return next()

   bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err)
      bcrypt.hash(user.password, salt, function (err, hash) {
         if (err) return next(err)
         user.password = hash
         next()
      })
   })
})

UserSchema.methods.comparePassword = function (candicatePass, cb) {
   bcrypt.compare(candicatePass, this.password, function (err, result) {
      if (err) cb(err)
      cb(null, result)
   })
}

UserSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('User', UserSchema)
