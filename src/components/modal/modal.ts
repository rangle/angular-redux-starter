import './modal.css';

export class RioModal {

  static selector = 'rioModal';

  static options: ng.IComponentOptions = {
    transclude: true,
    template: `
      <div class="fixed absolute--fill z-1 bg-black-30">
        <ng-transclude></ng-transclude>
      </div>
    `
  };
}
