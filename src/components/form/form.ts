export class RioForm {

  static selector = 'rioForm';

  static options: ng.IComponentOptions = {
    transclude: true,
    controller: RioForm,
    template: `
      <form ng-transclude>
      </form>
    `
  };
}
