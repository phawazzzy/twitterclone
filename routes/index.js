var express = require('express');
var router = express.Router();
const tweetController = require('../controllers/tweetControllers');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', tweetController.homePage);
router.get('/tweet', tweetController.tweet);
router.get("/login", tweetController.loginPage)
router.get('/followers', tweetController.followersPage);
router.get('/:name', tweetController.profilePage);

 
//  router.get('/:name', function(req, res, next){
//    res.render('profile', {title: "my tweets", username: req.params.name})
//  })

module.exports = router;


