export class RouterConfig {

  static $inject = ['$locationProvider'];

  constructor($locationProvider) {
    $locationProvider.html5Mode(false);
  }
}
