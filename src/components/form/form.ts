export class RioForm {

  static selector = 'rioForm';

  static options: ng.IComponentOptions = {
    transclude: true,
    controller: RioForm,
    controllerAs: 'formCtrl',
    bindings: {
      name: '=',
      onSubmit: '&',
    },
    template: `
      <form
        novalidate
        name="formCtrl.name"
        ng-submit="formCtrl.handleSubmit(form)">
        <ng-transclude></ng-transclude>
      </form>
    `
  };

  private onSubmit: Function;
  private name;

  handleSubmit() {
    this.onSubmit({ form: this.name });
  }
}
