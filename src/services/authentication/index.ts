import Inject from '../../utils/di';
import {ServerService} from '../../services';

const TOKEN_KEY = 'ngcourse-token';

export class AuthenticationService {

  static $inject = [
    //'dispatcher',
    'ServerService',
    '$window',
    '$ngRedux'];

  constructor(
    private serverService: ServerService,
    private $window: ng.IWindowService,
    private $ngRedux
  ) { }

  // mapStateToThis(state) {
  //   return {
  //     token: state.get('token')
  //   };
  // }

  public login(credentials) {
    return this.serverService.post('/auth/login', credentials)
      .then((response: any) => {
        //this.setToken(response.data.meta.token);
        return response.data;
      });
  }

  // public logout() {
  //   this.setToken();
  // }

  public getToken(state) {
    //return this.$window.localStorage.getItem(TOKEN_KEY);
    //return this.token;
    console.log(this.$ngRedux);
    return this.$ngRedux.state.get('token');
  }

  // public setToken(token?: string) {
  //   if (token) {
  //     this.$window.localStorage.setItem(TOKEN_KEY, token);
  //   } else {
  //     this.$window.localStorage.removeItem(TOKEN_KEY);
  //   }
  // }

}
