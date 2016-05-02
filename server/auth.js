'use strict';

const fs = require('fs');
const util = require('util');
const winston = require('winston');
const denodeify = require('denodeify');
const readFile = denodeify(fs.readFile);

module.exports = (app) => {
  let users = [];
  readFile('./server/users.json')
  .then(userFileData => {
    users = JSON.parse(userFileData);
  })
  .catch(err => {
    users = [];
    winston.error(err);
    throw err;
  });

  // Note that we are only authenticating against a static JSON file.
  // this should not be used for any production purpose.
  app.post('/api/auth/login', (req,res)=>{

    if (req.body.username && req.body.password){
      const authorized = users.filter(
        function(user){
          return (user.Username === req.body.username)
          && (user.Password === req.body.password);
        });
      if (authorized.length > 0)
        res.status(200).send(
          JSON.stringify({
            data: {
              msg: 'LOGIN SUCCESSFUL'
            },
            meta: {
              token: 'abcd1234',
              expires: '2020-01-01',
              first: authorized[0].First,
              last: authorized[0].Last
            }
          }));
      else
        res.status(401).send('ACCESS DENIED: Incorrect username or password.');
    }
    else
      res.status(401).send('ACCESS DENIED: Username or password was missing.');
   });
};