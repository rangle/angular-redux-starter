import Inject from '../../utils/di';
import {ServerService} from '../../services';

const TOKEN_KEY = 'ngcourse-token';

export class AuthenticationService {

  static $inject = [
    'ServerService',
  ];

  constructor(
    private serverService: ServerService
  ) { }

  public login(credentials) {
    return this.serverService.post('/auth/login', credentials)
      .then((response: any) => {
        return response.data;
      });
  }

}
