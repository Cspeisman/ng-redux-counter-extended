import angular from 'angular';
import ngRedux from 'ng-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import counter from './components/counter';
import someString from './components/someString';
import { devTools } from 'redux-devtools';

angular.module('counter', [ngRedux])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(rootReducer, [thunk], [devTools()]);
  })
  .directive('ngrCounter', counter)
  .directive('someString', someString);
