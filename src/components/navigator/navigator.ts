export class RioNavigator {

  static selector = 'rioNavigator';

  static options: ng.IComponentOptions = {
    transclude: true,
    bindings: {
      testid: '@',
    },
    controllerAs: 'navigatorCtrl',
    template: `
      <nav
        ng-transclude
        data-testid="{{navigatorCtrl.testid}}"
        class="flex items-center p1 bg-white border-bottom">
      </nav>
    `
  };
}
