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
        name="loginFormCtrl.loginForm"
        on-submit="loginFormCtrl.handleSubmit(form)">

        <rio-alert
          status="error"
          testid="alert-pending"
          ng-if="loginFormCtrl.isPending">
          Loading...
        </rio-alert>

        <rio-alert
          qaid="qa-alert"
          testid="alert-error"
          status="error"
          ng-if="loginFormCtrl.hasError">
          Invalid username and password
        </rio-alert>

        <rio-form-group testid="login-username">
          <rio-label qaid="qa-uname-label">Username</rio-label>
          <rio-input
            qaid="qa-uname-input"
            type="text"
            placeholder="Username"
            input-name="username"
            ng-model="loginFormCtrl.credentials.username"
            required="true">
          </rio-input>
          <rio-form-error
            qaid="qa-uname-validation"
            ng-if="loginFormCtrl.showNameWarning()">
            Username is required.
          </rio-form-error>
        </rio-form-group>

        <rio-form-group testid="login-password">
          <rio-label qaid="qa-password-label">Password</rio-label>
          <rio-input
            qaid="qa-password-input"
            type="password"
            input-name="password"
            placeholder="Password"
            ng-model="loginFormCtrl.credentials.password"
            required="true">
          </rio-input>
          <rio-form-error
            qaid="qa-password-validation"
            ng-if="loginFormCtrl.showPasswordWarning()">
            <div ng-if="loginFormCtrl.loginForm.password.$error.required">
              Password is required.
            </div>
          </rio-form-error>
        </rio-form-group>

        <rio-form-group testid="login-submit">
          <rio-button
            qaid="qa-login-button"
            type="submit"
            class-name="mr1">Login</rio-button>
          <rio-button
            qiad="qa-clear-button"
            type="reset"
            class-name="bg-red"
            ng-click="loginFormCtrl.clear()">
            Clear
          </rio-button>
        </rio-form-group>
      </rio-form>
    `
  };

  private onSubmit: Function;
  private credentials;
  private loginForm: any;

  constructor() {
    this.clear();
  }

  showNameWarning() {
    return this.loginForm.username.$touched
      && !this.loginForm.username.$valid
      && this.loginForm.username.$error.required;
  }

  showPasswordWarning() {
    return this.loginForm.password.$touched
      && !this.loginForm.password.$valid
      && this.loginForm.password.$error.required;
  }

  handleSubmit(form) {
    this.loginForm.username.$setTouched(true);
    this.loginForm.password.$setTouched(true);

    if (this.credentials.username && this.credentials.password) {
      this.onSubmit({
        credentials: this.credentials
      });
    }
  }

  clear() {
    if (this.loginForm) {
      this.loginForm.$setPristine();
      this.loginForm.$setUntouched();
    }
    this.credentials = {
      username: '',
      password: ''
    };
  }
}
