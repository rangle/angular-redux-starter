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
        class="cf ph2"
        ng-class="containerCtrl.classes">
        <div ng-transclude></div>
      </div>
    `
  };

  size: number;
  center: boolean;

  classes = {
    'mw5': this.size === 1,
    'mw6': this.size === 2,
    'mw7': this.size === 3,
    'mw8': this.size === 4,
    'center': this.center
  };
}
