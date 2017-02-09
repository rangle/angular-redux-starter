import {ServerService} from './';

describe('ServerService', () => {
  let _mockHttpService;
  let _mockSentData;
  let _mockResponseData;
  let _mockPath;
  let _mockId;

  beforeEach(() => {
    _mockPath = '/tasks';
    _mockId = 1;
    _mockSentData = {
      'sendvalue': 'Some sent value here.',
    };
    _mockResponseData = {
      'value': 'Some response value here.',
    };
    _mockHttpService = {
      get: () => {
        return Promise.resolve({ data: _mockResponseData });
      },
      post: () => {
        return Promise.resolve( _mockResponseData );
      },
      put: () => {
        return Promise.resolve( _mockResponseData );
      },
      delete: () => {
        return Promise.resolve( _mockResponseData );
      },
    };
  });

  it('should load', () => {
    expect(_mockHttpService).not.toBeUndefined();
    let serverService = new ServerService(_mockHttpService);

    expect(serverService.get(_mockPath)).not.toBeUndefined();
  });

  it('should receive successful response to GET request', (done) => {
    expect(_mockHttpService).not.toBeUndefined();
    let serverService = new ServerService(_mockHttpService);

    serverService.get(_mockPath)
      .then(data => {
        expect(data).toEqual(_mockResponseData);
        expect(1).toEqual(1);
        done();
      });
  });

  it('should encounter an error during GET request', (done) => {
    _mockResponseData = {
      status: 501,
      statusText: 'server error',
    };
    _mockHttpService = {
      post: () => {
        return Promise.reject({ data: _mockResponseData });
      }
    };

    expect(_mockHttpService).not.toBeUndefined();
    let serverService = new ServerService(_mockHttpService);
    let error;

    serverService.post(_mockPath, _mockSentData)
      .then(null, err => error = err)
      .then(() => {
        expect(error).not.toBeUndefined();
        done();
      });
  });

  it('should receive successful response to POST request', (done) => {
    let serverService = new ServerService(_mockHttpService);

    serverService.post(_mockPath, _mockSentData)
      .then(data => {
        expect(data).toEqual(_mockResponseData);
        done();
      });
  });

  it('should receive successful response to PUT request', (done) => {
    let serverService = new ServerService(_mockHttpService);

    serverService.put(_mockPath, _mockId, _mockSentData)
      .then(data => {
        expect(data).toEqual(_mockResponseData);
        done();
      });
  });

  it('should receive successful response to DELETE request', (done) => {
    let serverService = new ServerService(_mockHttpService);

    serverService.delete(_mockPath, _mockId)
      .then(data => {
        expect(data).toEqual(_mockResponseData);
        done();
      });
  });
});
