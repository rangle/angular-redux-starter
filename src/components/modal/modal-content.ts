export class RioModalContent {

  static selector = 'rioModalContent';

  static options: ng.IComponentOptions = {
    transclude: true,
    controllerAs: 'ctrl',
    controller: RioModalContent,
    template: `
      <div class="p1 z4 bg-white modal__content">
        <ng-transclude></ng-transclude>
      </div>
    `
  };
}
