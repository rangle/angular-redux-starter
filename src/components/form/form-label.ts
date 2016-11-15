export class RioLabel {

  static selector = 'rioLabel';

  static options: ng.IComponentOptions = {
    bindings: {
      qaid: '@'
    },
    controller: RioLabel,
    controllerAs: 'labelCtrl',
    transclude: true,
    template: `
      <label class="db fw6 lh-copy f6"
        ng-attr-id="{{labelCtrl.qaid}}"
        ng-transclude>
      </label>
    `
  };
}
