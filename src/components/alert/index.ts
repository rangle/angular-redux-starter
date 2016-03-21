export class RioAlert {

  static selector = 'rioAlert';

  static options: ng.IComponentOptions = {
    transclude: true,
    bindings: {
      'status': '@'
    },
    controllerAs: 'ctrl',
    controller: RioAlert,
    template: `
      <div class="p2 bold" ng-transclude
        ng-class="ctrl.componentColour[ctrl.status]">
      </div>
    `
  };

  private componentColour: Object = {
    info: 'bg-blue white',
    warning: 'bg-yellow black',
    success: 'bg-green black',
    error: 'bg-red white'
  };
}
