export class RioContainer {

  static selector = 'rioContainer';

  static options: ng.IComponentOptions = {
    bindings: {
      testid: '@',
      size: '=',
      center: '='
    },
    controller: RioContainer,
    transclude: true,
    controllerAs: 'containerCtrl',
    template: `
      <div
        data-testid="{{containerCtrl.testid}}"
        class="clearFix px1"
        ng-class="containerCtrl.classes">
        <div ng-transclude></div>
      </div>
    `
  };

  size: number;
  center: boolean;

  classes = {
    'max-width-1': this.size === 1,
    'max-width-2': this.size === 2,
    'max-width-3': this.size === 3,
    'max-width-4': this.size === 4,
    'mx-auto': this.center
  };
}
