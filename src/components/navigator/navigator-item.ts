export class RioNavigatorItem {

  static selector = 'rioNavigatorItem';

  static options: ng.IComponentOptions = {
    transclude: true,
    controllerAs: 'navigatorItemCtrl',
    bindings: {
      testid: '@',
      mr: '<',
      ml: '<'
    },
    template: `
      <div
        class="truncate"
        data-testid="{{navigatorItemCtrl.testid}}"
        ng-class="{'ml3': navigatorItemCtrl.ml, 'mr3': navigatorItemCtrl.mr}"
        ng-transclude>
      </div>
    `
  };
}
