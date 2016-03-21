export class RioLoginForm {

  static selector = 'rioLoginForm';

  static options: ng.IComponentOptions = {
    transclude: true,
    controller: RioLoginForm,
    template: `
      <rio-form>
        <rio-alert status="info">Loading...</rio-alert>
        <rio-alert status="error">Invalid username and password</rio-alert>
        <rio-form-group>
          <rio-form-label>Username</rio-form-label>
          <rio-form-input
            type="text"
            placeholder="admin">
          </rio-form-input>
          <rio-form-error>Username required!</rio-form-error>
        </rio-form-group>
        <rio-form-group>
          <rio-form-label>Password</rio-form-label>
          <rio-form-input
            type="password"
            placeholder="password">
          </rio-form-input>
          <rio-form-error>Password required!</rio-form-error>
        </rio-form-group>
        <rio-form-group>
          <rio-button class-styles="mr1">Submit</rio-button>
          <rio-button class-styles="bg-red">Clear</rio-button>
        </rio-form-group>
      </rio-form>
    `
  };
}
