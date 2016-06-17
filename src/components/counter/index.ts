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
      <div class="flex">
        <rio-button
          testid="counter-decrementButton"
          class-name="bg-black col-0"
          on-click="counterCtrl.decrement()">
          -
        </rio-button>

        <div
          data-testid="counter-result"
          class="flex-auto flex-center center h1">
          {{ counterCtrl.value }}
        </div>

        <rio-button
          testid="counter-incrementButton"
          class-name="col-0"
          on-click="counterCtrl.increment()">
          +
        </rio-button>
      </div>
    `
  };
}
