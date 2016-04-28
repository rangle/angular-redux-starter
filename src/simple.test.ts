'use strict';

import {AuthenticationService} from './services/authentication';  
//import {ServerService} from './services/server'; 
// Load Chai's expect library for assertions.
import {expect} from 'chai';

//export function main() { 
describe('Simple Math Test', () => {
  it('2*2 should equal 4', () => {
    let x = 2 * 2;
    let y = 4;
    // Assert that x is defined.
    expect(x).to.not.be.undefined;
    // Assert that x equals to specific value.
    expect(x).to.equal(4);
    // Assert that x equals to y.
    expect(x).to.equal(y);
    // See http://chaijs.com/api/bdd/ for more assertion options.
  });
});

// xdescribe('Authentication Service Tests', () => {
//   // Load the angular module. Having smaller modules helps here.
//   //beforeEach(angular.module('AuthenticationService'));
//   it('Should get loaded', () => {
//     inject(function(auth) {
//       expect(auth.login()).to.not.be.undefined;
//     }); 
//   });
// });

describe('AuthenticationService', () => {
  let _mockServerService;//: ServerService;
  let _mockResponse = {
    "data": {},
    "isAuthenticated": true,
    "meta": {
      "token": "abc123",
      "expires": "2100-01-01T01:01:0.0Z"
    }
  }

  beforeEach(() => { 
    _mockServerService = {
      post: (path, data) => Promise.resolve(_mockResponse)
    };
  });

  it('should load', () => {
    
    expect(_mockServerService).to.not.be.undefined;
    let authService = new AuthenticationService(_mockServerService);
    let _mockCreds = { username:'alice', password:'x'};

    expect(authService.login(_mockCreds)).to.not.be.undefined;
  });
});

//}

