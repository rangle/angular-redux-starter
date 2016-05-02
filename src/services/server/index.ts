import Inject from '../../utils/di';

export class ServerService {

  static $inject = [
    '$http'
  ];

  // Actual server URL to be accessed, may blocked due to CORS
  // We are handling this locally with node-server and server/auth.js
  private BASE_URL = 'http://localhost:8080/api';

  // If trying to access a remote server and encountering CORS issues,
  // enable local proxy in server/proxy-config.js 
  // This way, requests are re-routed via `/api/`
  // private BASE_URL = 'http://localhost:8080/api';

  constructor(
    private $http: angular.IHttpService
  ) { }

  public get(path, id?) {
    return this.$http.get(this.BASE_URL + path)
      .then(response => response.data);
  }

  public post(path, data) {
    return this.$http.post(this.BASE_URL + path, data);
  }

  public put(path, id, data) {
    return this.$http.put(this.BASE_URL + path + '/' + id, data);
  }

  public delete(path, id) {
    return this.$http.delete(this.BASE_URL + path + '/' + id);
  }
}
