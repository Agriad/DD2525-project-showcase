const express = require('express')
const app = express()
const port = 8000
const passport = require('passport')
const fs = require('fs');
const https = require('https');
const path = require('path');

const privateKey  = fs.readFileSync('key/showcase.key', 'utf8');
const certificate = fs.readFileSync('key/showcase.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

app.use(express.static('public'));

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "https://localhost:8000/home.html",
  profileFields: ["name"]
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

// app.get('/',
//   express.static('./index.html'));

app.get('/login',
  passport.authenticate('facebook'));
 
app.get('/home',
  passport.authenticate('facebook', { failureRedirect: '/index' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home');
  });

app.get('/site',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'public/site.html'))
  });

app.use(passport.initialize());

https.createServer(credentials, app).listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`)
});

module.exports = app;
