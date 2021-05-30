const express = require('express')
const app = express()
const port = 8001
const passport = require('passport')
const fs = require('fs');
const https = require('https');
const path = require('path');

const privateKey  = fs.readFileSync('key/showcase.key', 'utf8');
const certificate = fs.readFileSync('key/showcase.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

require('dotenv').config();

app.use(express.static('public'));

app.get('/login',
(req, res) => {
  res.sendFile(path.join(__dirname, 'public/login.html'))
});
 
app.get('/home',
(req, res) => {
  res.sendFile(path.join(__dirname, 'public/home.html'))
});

app.get('/site',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'public/site.html'))
});

https.createServer(credentials, app).listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`)
});

module.exports = app;
