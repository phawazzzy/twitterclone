let userTweets =[
    {
        body: "My first tweet",
        user: "kareem fawas",
        date: new Date

    },
    {
        body: "My second tweet",
        user: "ambode",
        date: new Date

    },
    {
        body: "My third tweet",
        user: "tinubu",
        date: new Date().toDateString()

    },
]

let userFollowers =[
    {
        body: "My first tweet",
        user: "kareem fawas",
        date: new Date

    },
]

exports.homePage = function(req, res, next) {
     res.render('index2', { title: 'LASU' });
    };
exports.loginPage = function(req, res, next){
    res.render("login", {title: "login", })
}

exports.tweet= function(req, res, next) {
    res.render('tweet', { title: 'twitter', pageOwner:"fawas" , tweets: userTweets });
   };

exports.profilePage = function(req, res, next){
    res.render('profile', { title: "my profile", username: req.params.name});
};

exports.followersPage = function(req, res, next){
    res.render('followers', {title: "my followers", pageOwner: "phawazzzy", people: userFollowers,  tweets: userTweets});
}