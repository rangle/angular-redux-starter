import Inject from '../../utils/di';

export class RouterConfig {
  constructor(
    @Inject('$locationProvider') $locationProvider
  ) {
    $locationProvider.html5Mode(false);
  }
}
