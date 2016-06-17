import Inject from '../utils/di';

import * as CounterActions from '../actions/counter';

export class RioCounterPage {

  static selector = 'rioCounterPage';

  static options: ng.IComponentOptions = {
    controller: RioCounterPage,
    controllerAs: 'counterPageCtrl',
    template: `
      <rio-container
        testid="counter"
        size="2"
        center="true">
        <h2
          data-testid="counter-heading"
          id="qa-counter-heading"
          class="center caps">
          Counter
        </h2>
        <rio-counter
          increment="counterPageCtrl.increment()"
          decrement="counterPageCtrl.decrement()"
          value="counterPageCtrl.value">
        </rio-counter>
      </rio-container>
    `
  };

  constructor(
    @Inject('$ngRedux') $ngRedux,
    @Inject('$scope') $scope: ng.IScope,
    @Inject('$rootScope') $rootScope) {

    const disconnect = $ngRedux.connect(
      this.mapStateToThis, CounterActions)(this);

    // Needed for redux devtools to be able to update application state.
    const unsubscribe = $ngRedux.subscribe(_ => {
      setTimeout($rootScope.$apply.bind($rootScope), 100);
    });

    $scope.$on('$destroy', () => {
      unsubscribe();
      disconnect();
    });
  }

  mapStateToThis(state) {
    return {
      value: state.counter.get('count')
    };
  }
}
