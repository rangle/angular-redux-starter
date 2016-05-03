'use strict';

const express = require('express');
const winston = require('winston');
const helmet = require('helmet');
const nodeProxy = require('./node-proxy');
const nodeAppServer = require('./node-app-server');
const authPassport = require('./auth-passport');
const bodyParser = require('body-parser');
const users = [];
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

/**
 * Heroku-friendly production http server.
 *
 * Serves your app and allows you to proxy APIs if needed.
 */

const app = express();
const PORT = process.env.PORT || 8080;

// Enable various security helpers.
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

users = authPassport.readUsers();

passport.use(new LocalStrategy(

  function (username, password, done){
    authPassport.authenticateUser(username, password, users)
    .then ((authResult) => {
      return done(null, authResult);
    })
    .then (null, (message) =>{
      return done(null, false, message);
    });
  }

));

// auth(app);

// API proxy logic: if you need to talk to a remote server from your client-side
// app you can proxy it though here by editing ./proxy-config.js
nodeProxy(app);

// Serve the distributed assets and allow HTML5 mode routing. NB: must be last.
nodeAppServer(app);

// Start up the server.
app.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }

  winston.info(`Listening on port ${PORT}`);
});
