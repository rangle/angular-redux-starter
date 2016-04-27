import Inject from '../../utils/di';

export class ServerService {

  static $inject = [
    '$http'
  ];

  // Actual server URL to be accessed, but blocked due to CORS
  // private BASE_URL = 'http://ngcourse.herokuapp.com';

  // Instead, enable proxy in ../../../server/proxy-config.js 
  // requests are re-routed via `/api/`
  private BASE_URL = 'http://localhost:8080/api/';

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
