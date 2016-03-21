export class RioFormLabel {

  static selector = 'rioFormLabel';

  static options: ng.IComponentOptions = {
    transclude: true,
    controller: RioFormLabel,
    template: `
      <label ng-transclude>
      </label>
    `
  };
}
