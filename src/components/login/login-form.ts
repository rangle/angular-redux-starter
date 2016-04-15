export class RioLoginForm {

  static selector = 'rioLoginForm';

  static options: ng.IComponentOptions = {
    bindings: {
      onSubmit: '&',
      hasError: '<',
      isPending: '<',
    },
    controller: RioLoginForm,
    controllerAs: 'loginFormCtrl',
    template: `
      <rio-form
        name="loginForm"
        on-submit="loginFormCtrl.handleSubmit(form)">

        <rio-alert status="info" ng-if="loginFormCtrl.isPending">
          Loading...
        </rio-alert>

        <rio-alert status="error" ng-if="loginFormCtrl.hasError">
          Invalid username and password
        </rio-alert>

        <rio-form-group>
          <rio-label>Username</rio-label>
          <rio-input
            type="text"
            placeholder="Username"
            input-name="username"
            ng-model="loginFormCtrl.credentials.username"
            required="true">
          </rio-input>
          <rio-form-error
            ng-if="!loginForm.username.$valid && loginForm.username.$dirty">
            <div ng-if="loginForm.username.$error.required">
              Username required!
            </div>
          </rio-form-error>
        </rio-form-group>

        <rio-form-group>
          <rio-label>Password</rio-label>
          <rio-input
            type="password"
            input-name="password"
            placeholder="Password"
            ng-model="loginFormCtrl.credentials.password"
            required="true">
          </rio-input>
          <rio-form-error
            ng-if="!loginForm.password.$valid && loginForm.password.$dirty">
            <div ng-if="loginForm.password.$error.required">
              Password required!
            </div>
          </rio-form-error>
        </rio-form-group>

        <rio-form-group>
          <rio-button type="submit" class-name="mr1">Login</rio-button>
          <rio-button
            class-name="bg-red"
            ng-click="loginFormCtrl.clear(loginForm)">
            Clear
          </rio-button>
        </rio-form-group>
      </rio-form>
    `
  };

  private onSubmit: Function;
  private credentials;

  constructor() {
    this.clear();
  }

  handleSubmit(form) {
    this.onSubmit({
      credentials: this.credentials
    });
  }

  clear(form?: any) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    this.credentials = {
      username: '',
      password: ''
    };
  }
}
