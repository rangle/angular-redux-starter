export class RioAlert {

  static selector = 'rioAlert';

  static options: ng.IComponentOptions = {
    transclude: true,
    bindings: {
      qaid: '@',
      testid: '@',
      status: '@'
    },
    controller: RioAlert,
    controllerAs: 'alertCtrl',
    template: `
      <div ng-attr-id="{{alertCtrl.qaid}}"
        class="pa3 b"
        data-testid="{{alertCtrl.testid}}"
        ng-class="alertCtrl.componentColour"
        ng-transclude>
      </div>
    `
  };

  status: String;

  componentColour = {
    'bg-blue': this.status === 'info',
    'bg-yellow': this.status === 'warning',
    'bg-green': this.status === 'success',
    'bg-red': this.status === 'error',
    white: this.status === 'info' || this.status === 'error'
  };
}
