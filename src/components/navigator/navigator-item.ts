export class RioNavigatorItem {

  static selector = 'rioNavigatorItem';

  static options: ng.IComponentOptions = {
    transclude: true,
    controllerAs: 'navigatorItemCtrl',
    bindings: {
      mr: '<',
      ml: '<'
    },
    template: `
      <div class="truncate" 
          ng-class="{'ml2': navigatorItemCtrl.ml, 'mr2': navigatorItemCtrl.mr}" 
          ng-transclude>
          </div>
    `
  };
}
