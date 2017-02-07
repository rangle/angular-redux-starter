export class RioLogo {

  static selector = 'rioLogo';

  static options: ng.IComponentOptions = {
    controllerAs: 'logoCtrl',
    controller: RioLogo,
    template: `
      <div className="flex items-center">
        <img
          ng-class="logoCtrl.styles.logo"
          ng-src="{{logoCtrl.logoImage}}"
          alt="Rangle.io">
      </div>
    `
  };

  public logoImage = require('../../assets/rangleio-logo.svg');
  public styles = require('./logo.css');
}
