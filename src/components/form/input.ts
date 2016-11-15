export class RioInput {

  static selector = 'rioInput';

  static options: ng.IComponentOptions = {
    bindings: {
      qaid: '@',
      placeholder: '@',
      type: '@',
      ngModel: '=',
      inputName: '@',
      required: '@',
    },
    controller: RioInput,
    controllerAs: 'inputCtrl',
    template: `
      <input
        ng-attr-id="{{inputCtrl.qaid}}"
        name="{{inputCtrl.inputName}}"
        class="pa2 input-reset ba b--black-30 bg-transparent w-100 mb3 br2"
        type="{{inputCtrl.type || 'text'}}"
        placeholder="{{inputCtrl.placeholder}}"
        ng-model="inputCtrl.ngModel"
        ng-required="{{inputCtrl.required}}"
      />
    `
  };
}
