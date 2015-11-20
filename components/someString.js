import * as CounterActions from '../actions/counter';

const randomStrings = ['Hello there', 'yolo yolo', 'redux action, dawg.'];

export default function someString() {
  return {
    restrict: 'E',
    controller: stringController,
    template: `
      <div>{{value}}
      </div>
      <button ng-click="click()">Cick this button</button>
      `,
    scope: {
      value: '='
    }
  }
}

class stringController {
  constructor($ngRedux, $scope) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, CounterActions)(this);
    $scope.click = this.clickHandler.bind(this);
    $scope.$on('$destroy', unsubscribe);
  }

  clickHandler() {
    const randItem = randomStrings[Math.floor(Math.random()*randomStrings.length)];
    this.changeString(randItem);
  }

  mapStateToThis(state) {
    return {};
  }
}
