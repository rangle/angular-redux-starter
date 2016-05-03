'use strict';

const fs = require('fs');
const util = require('util');
const winston = require('winston');
const denodeify = require('denodeify');
const readFile = denodeify(fs.readFile);

module.exports = {

  readUsers: function() {
    return readFile('./server/users.json')
    .then(userFileData => {
      return JSON.parse(userFileData);
    })
    .catch(err => {
      winston.error(err);
      throw err;
    });
  },

  // Note that we are only authenticating against a static JSON file.
  // this should not be used for any production purpose.
  authenticateUser: function(username, password, users) {
    return new Promise(function(resolve, reject) {
      if (username && password) {
        const authorized = users.filter(
          function(user) {
            return (user.Username === username) && (user.Password === password);
        });
        if (authorized.length > 0)
          resolve( {
            data: {
              msg: 'LOGIN SUCCESSFUL'
            },
            meta: {
              id: authorized[0].id,
              token: 'abcd1234',
              expires: '2020-01-01',
              first: authorized[0].First,
              last: authorized[0].Last
            }
          });
        else {
          reject({message: 'LOGIN FAILED'});
        }
      } else {
        reject({message: 'INVALID REQUEST'});
      }
    });
  },

  getUserById: function (id, users){
    const results = users.filter(
      function(user){
        return (user.id === id);
      });
    return results.length > 0 ? results[0] : {};
  },

};
