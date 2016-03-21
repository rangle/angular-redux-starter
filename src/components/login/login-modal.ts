export class RioLoginModal {

  static selector = 'rioLoginModal';

  static options: ng.IComponentOptions = {
    transclude: true,
    controllerAs: 'ctrl',
    controller: RioLoginModal,
    template: `
      <rio-modal-mask>
        <rio-modal-content>
          <h1 class='mr2 ml2'>Login</h1>
          <rio-login-form>
          </rio-login-form>
        </rio-modal-content>
      </rio-modal-mask>
    `
  };
}
