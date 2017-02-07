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
          class="tc ttu">
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

  static $inject = ['$ngRedux', '$scope', '$rootScope'];

  constructor(
    private $ngRedux,
    private $scope: ng.IScope,
    private $rootScope: ng.IScope) {

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
