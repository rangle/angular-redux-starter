import {expect} from 'chai';
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
      get: (path) => {
        return Promise.resolve({ data: _mockResponseData });
      },
      post: (path, data) => {
        return Promise.resolve( _mockResponseData );
      },
      put: (path, data) => {
        return Promise.resolve( _mockResponseData );
      },
      delete: (path) => {
        return Promise.resolve( _mockResponseData );
      },
    };
  });

  it('should load', () => {
    expect(_mockHttpService).to.not.be.undefined;
    let serverService = new ServerService(_mockHttpService);

    expect(serverService.get(_mockPath)).to.not.be.undefined;
  });

  it('should receive successful response to GET request', () => {
    expect(_mockHttpService).to.not.be.undefined;
    let serverService = new ServerService(_mockHttpService);

    return serverService.get(_mockPath)
      .then(data => {
        expect(data).to.deep.equal(_mockResponseData);
      });
  });

  it('should encounter an error during GET request', () => {
    _mockResponseData = {
      status: 501,
      statusText: 'server error',
    };
    _mockHttpService = {
      post: (path, data) => { 
        return Promise.reject({ data: _mockResponseData });
      }
    };

    expect(_mockHttpService).to.not.be.undefined;
    let serverService = new ServerService(_mockHttpService);

    return serverService.post(_mockPath, _mockSentData)
      .then(data => {
        throw new Error('Auth should fail, but it seems to have succeeded.');
      })
      .then(null, error => {
        //catch and suppress error, it is what we want.
      });
  });

  it('should receive successful response to POST request', () => {
    expect(_mockHttpService).to.not.be.undefined;
    let serverService = new ServerService(_mockHttpService);

    return serverService.post(_mockPath, _mockSentData)
      .then(data => {
        expect(data).to.deep.equal(_mockResponseData);
      });
  });

  it('should receive successful response to PUT request', () => {
    expect(_mockHttpService).to.not.be.undefined;
    let serverService = new ServerService(_mockHttpService);

    return serverService.put(_mockPath, _mockId, _mockSentData)
      .then(data => {
        expect(data).to.deep.equal(_mockResponseData);
      });
  });

  it('should receive successful response to DELETE request', () => {
    expect(_mockHttpService).to.not.be.undefined;
    let serverService = new ServerService(_mockHttpService);

    return serverService.delete(_mockPath, _mockId)
      .then(data => {
        expect(data).to.deep.equal(_mockResponseData);
      });
  });
});
