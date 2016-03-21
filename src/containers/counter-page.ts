import Inject from '../utils/di';

import * as CounterActions from '../actions/counter';

export class RioCounterPage {

  static selector = 'rioCounterPage';

  static options: ng.IComponentOptions = {
    transclude: true,
    controllerAs: 'ctrl',
    controller: RioCounterPage,
    template: `
      <div class="max-width-2 mx-auto">
        <h1 class="center">Counter</h1>
        <rio-counter
          increment="ctrl.increment()"
          decrement="ctrl.decrement()"
          value="ctrl.value">
        </rio-counter>
      </div>
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
      setTimeout($rootScope.$apply, 100);
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
