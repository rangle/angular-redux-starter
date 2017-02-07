export class RioButton {

  static selector = 'rioButton';

  static options: ng.IComponentOptions = {
    transclude: true,
    controllerAs: 'buttonCtrl',
    bindings: {
      qaid: '@',
      testid: '@',
      type: '@',
      className: '@',
      onClick: '&'
    },
    controller: RioButton,
    template: `
      <button
        data-testid="{{buttonCtrl.testid}}"
        ng-attr-id="{{buttonCtrl.qaid}}"
        type="{{buttonCtrl.type || 'button'}}"
        ng-transclude
        ng-click="buttonCtrl.onClick()"
        class="f6 link dim br2 ph3 pv2 dib white bg-black pointer bw0
          button-reset {{ buttonCtrl.className }}">
      </button>
    `
  };

  static $inject = ['$element'];

  constructor(private $element: JQuery) {
    this.$element.addClass('input-reset');
  }
}
