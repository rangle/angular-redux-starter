export class RioFormGroup {

  static selector = 'rioFormGroup';

  static options: ng.IComponentOptions = {
    transclude: true,
    controller: RioFormGroup,
    template: `
      <div class="p2" ng-transclude>
      </div>
    `
  };
}
