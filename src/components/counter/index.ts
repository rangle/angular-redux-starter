export class RioCounter {

  static selector = 'rioCounter';

  static options: ng.IComponentOptions = {
    bindings: {
      value: '<',
      increment: '&',
      decrement: '&'
    },
    controller: RioCounter,
    controllerAs: 'counterCtrl',
    template: `
      <div class="flex items-center">
        <rio-button
          testid="counter-decrementButton"
          class-name="bg-red"
          on-click="counterCtrl.decrement()">
          -
        </rio-button>

        <div
          data-testid="counter-result"
          class="flex-auto items-center tc f1">
          {{ counterCtrl.value }}
        </div>

        <rio-button
          testid="counter-incrementButton"
          on-click="counterCtrl.increment()">
          +
        </rio-button>
      </div>
    `
  };
}
