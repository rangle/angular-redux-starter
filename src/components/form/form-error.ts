export class RioFormError {

  static selector = 'rioFormError';

  static options: ng.IComponentOptions = {
    bindings: {
      qaid: '@',
      testid: '@',
    },
    controller: RioFormError,
    controllerAs: 'errorCtrl',
    transclude: true,
    template: `
      <div
        data-testid="{{errorCtrl.testid || 'form-error'}}"
        ng-attr-id="{{errorCtrl.qaid}}"
        class="bold black" ng-transclude>
      </div>
    `
  };
}
