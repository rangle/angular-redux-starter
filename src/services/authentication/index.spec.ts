import {AuthenticationService} from './';

describe('AuthenticationService', () => {
  let _mockServerService;
  let _mockCreds;
  let _mockResponse;

  beforeEach(() => {
    _mockCreds = { username: 'alice', password: 'x'};
    _mockServerService = {
      post: () => {
        return Promise.resolve({ data: _mockResponse });
      }
    };
  });

  it('should load', () => {
    expect(_mockServerService).not.toBeUndefined();
    let authService = new AuthenticationService(_mockServerService);

    expect(authService.login(_mockCreds)).not.toBeUndefined;
  });

  it('should receive successful response', () => {
    _mockResponse = {
      'data': {},
      'isAuthenticated': true,
      'meta': {
        'token': 'abc123',
        'expires': '2100-01-01T01:01:0.0Z',
        'first': 'First',
        'last': 'Last'
      },
    };

    expect(_mockServerService).not.toBeUndefined();
    let authService = new AuthenticationService(_mockServerService);

    return authService.login(_mockCreds)
      .then(data => {
        expect(data).toEqual(_mockResponse);
      });
  });

  it('should encounter an error', () => {

    _mockResponse = {
      status: 401,
      statusText: 'unauthorized',
    };
    _mockServerService = {
      post: () => {
        return Promise.reject({ data: _mockResponse });
      }
    };

    expect(_mockServerService).not.toBeUndefined();
    let authService = new AuthenticationService(_mockServerService);

    let error;
    return authService.login(_mockCreds)
      .then(null, err => error = err)
      .then(() => {
        expect(error).not.toBeUndefined;
      });
  });
});
