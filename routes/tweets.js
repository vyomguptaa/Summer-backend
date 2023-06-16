const router = require('express').Router()
const {TweetController} = require('../controllers')
const {loggedIn} = require('../middlewares/auth')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

router.get('/', loggedIn, TweetController.getAllTweets)

router.get('/:tweetId', loggedIn, TweetController.getTweet)
router.get('/:tweetId/images', loggedIn, TweetController.getImage)
router.post('/new', loggedIn, upload.array('images', 5), TweetController.createTweet)
// create a post api to upload an image
// router.post('/upload', loggedIn ,upload.single('image'), TweetController.uploadImage)

router.delete('/:tweetId', loggedIn, TweetController.removeTweet)

router.patch('/:tweetId/like', loggedIn, TweetController.likeTweet)

router.patch('/:tweetId/unlike', loggedIn, TweetController.unlikeTweet)

router.patch('/:tweetId/retweet', loggedIn, TweetController.reTweet)

router.patch('/:tweetId/unretweet', loggedIn, TweetController.unRetweet)

module.exports = router
