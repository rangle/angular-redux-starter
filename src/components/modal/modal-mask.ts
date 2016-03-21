export class RioModalMask {

  static selector = 'rioModalMask';

  static options: ng.IComponentOptions = {
    transclude: true,
    controllerAs: 'ctrl',
    controller: RioModalMask,
    template: `
      <div class="fixed top-0 bottom-0 left-0 right-0 p1 modal__mask">
        <ng-transclude></ng-transclude>
      </div>
    `
  };
}
