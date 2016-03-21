export class RioFormInput {

  static selector = 'rioFormInput';

  static options: ng.IComponentOptions = {
    transclude: true,
    bindings: {
      'placeholder': '@',
      'type': '@'
    },
    controllerAs: 'ctrl',
    controller: RioFormInput,
    template: `
      <input
        class="block col-12 mb1 input"
        type="{{ctrl.type || 'text'}}"
        placeholder="{{ctrl.placeholder}}"/>
    `
  };
}
