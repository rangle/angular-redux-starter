export class RioFormGroup {

  static selector = 'rioFormGroup';

  static options: ng.IComponentOptions = {
    transclude: true,
    bindings: {
      testid: '@',
    },
    controllerAs: 'formGroupCtrl',
    template: `
      <div
        data-testid="{{formGroupCtrl.testid}}"
        class="py2">
        <ng-transclude></ng-transclude>
      </div>
    `
  };
}
