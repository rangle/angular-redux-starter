import {loginUser, logoutUser} from '../actions/session';

export class RioSampleApp {

  static selector = 'rioSampleApp';

  static options = {
    controller: RioSampleApp,
    controllerAs: 'appCtrl',
    template: `
      <div>
        <rio-login-modal
          on-submit="appCtrl.login(credentials)"
          has-error="appCtrl.session.get('hasError', false)"
          is-pending="appCtrl.session.get('isLoading', false)"
          ng-if="!appCtrl.isLoggedIn">
        </rio-login-modal>
        <rio-navigator>
          <rio-navigator-item mr="true">
            <rio-logo></rio-logo>
          </rio-navigator-item>

          <rio-navigator-item ng-if="appCtrl.isLoggedIn" mr="true">
            <a ng-link="['Counter']" class="text-decoration-none">Counter</a>
          </rio-navigator-item>
          <rio-navigator-item ng-if="appCtrl.isLoggedIn">
            <a ng-link="['About']" class="text-decoration-none">About Us</a>
          </rio-navigator-item>
          <div class="flex flex-auto"></div>
          <rio-navigator-item mr="true">
            {{
              appCtrl.session.getIn(['user', 'firstName'], '') + ' ' +
              appCtrl.session.getIn(['user', 'lastName'], '') }}
          </rio-navigator-item>
          <rio-navigator-item ng-hide="!appCtrl.isLoggedIn">
            <rio-button
              ng-click="appCtrl.logout()"
              class-name="bg-red white">
              Logout
            </rio-button>
          </rio-navigator-item>
        </rio-navigator>
        <div ng-show="appCtrl.isLoggedIn">
          <ng-outlet></ng-outlet>
        </div>
      </div>
    `,
    $routeConfig: [{
        path: '/counter',
        name: 'Counter',
        component: 'rioCounterPage',
        useAsDefault: true
      }, {
        path: '/about',
        name: 'About',
        component: 'rioAboutPage'
      }
    ]
  };

  static $inject = [
    '$ngRedux',
    '$scope'
  ];

  constructor($ngRedux, $scope: ng.IScope) {
    const unsubscribe = $ngRedux.connect(
      this.mapStateToThis, this.mapDispatchToThis)(this);

    $scope.$on('$destroy', unsubscribe);
  }

  mapStateToThis(state) {
    return {
      session: state.session,
      isLoggedIn: state.session.get('token', false)
    };
  }

  mapDispatchToThis(dispatch) {
    return {
      login: (credentials) => dispatch(loginUser(credentials)),
      logout: () => dispatch(logoutUser())
    };
  }
}
