export class RioApp {

  static selector = 'rioRoot';

  static options: ng.IComponentOptions = {
    transclude: true,
    controller: RioApp,
    template: `
      <div class="col-12">
        <rio-login-modal></rio-login-modal>
        <rio-navigator>
          <div class="flex flex-auto">
            <rio-navigator-item class="p1">
              <rio-logo></rio-logo>
            </rio-navigator-item>
            <rio-navigator-item class="p1">
              <a ng-link="['Counter']" class="text-decoration-none">Counter</a>
            </rio-navigator-item>
            <rio-navigator-item class="p1">
              <a ng-link="['About']" class="text-decoration-none">About</a>
            </rio-navigator-item>
          </div>
        </rio-navigator>
        <div class="mt3 p1">
          <ng-outlet></ng-outlet>
        </div>
      </div>
    `,
    $routeConfig: [{
        path: '/counter',
        name: 'Counter',
        component: 'rioCounterPage',
        useAsDefault: true
      }, {
        path: '/about',
        name: 'About',
        component: 'rioAboutPage'
      }
    ]
  };
}
