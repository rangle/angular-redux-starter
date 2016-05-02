import Inject from '../utils/di';

import {AuthenticationService} from '../services';

import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER
} from '../constants';

export class AuthenticationActions {
  static $inject = [
    'AuthenticationService'];

  constructor(
    private authService: AuthenticationService
  ) { }

  loginUser(credentials) {
    return (dispatch, getState) => {
      const username = credentials.username;
      const password = credentials.password;

      this.authService.login(credentials)
      .then((data) => {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: {
            token: data.meta.token,
            profile: {
              firstName: data.meta.first,
              lastName: data.meta.last,
            }
          }
        });
      })
      .then(null, (error) => {
        dispatch({
          type: LOGIN_USER_ERROR,
        });
      });

      return {
        type: LOGIN_USER_PENDING,
      };
    };
  }

  logoutUser() {
    return {
      type: LOGOUT_USER,
    };
  }
}
