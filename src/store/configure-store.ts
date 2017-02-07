declare const __DEV__: boolean;

// A hack for the Redux DevTools Chrome extension.
interface Window {
  devToolsExtension?: () => void;
}

import {fromJS} from 'immutable';
import * as angular from 'angular';
import 'ng-redux';
const ReduxThunk = require('redux-thunk').default;
const persistState = require('redux-localstorage');

import logger from './configure-logger';
import promiseMiddleware from '../middleware/promise-middleware';
import reducer from '../reducers';

angular.module('counter.store', ['ngRedux'])
  .config(
  ['$ngReduxProvider',
    $ngReduxProvider => {
      $ngReduxProvider.createStoreWith(
        reducer,
        _getMiddleware(),
        _getEnhancers());
    }
  ]);

function _getMiddleware() {
  let middleware = [promiseMiddleware, ReduxThunk];

  if (__DEV__) {
    middleware = [...middleware, logger];
  }

  return middleware;
}

function _getEnhancers() {
  let enhancers = [
    persistState('session', _getStorageConfig())
  ];

  if (__DEV__ && (window as Window).devToolsExtension) {
    enhancers = [...enhancers, (window as Window).devToolsExtension()];
  }

  return enhancers;
}

function _getStorageConfig() {
  return {
    key: 'angular-redux-seed',
    serialize: (store) => {
      return store && store.session ?
        JSON.stringify(store.session.toJS()) : store;
    },
    deserialize: (state) => ({
      session: state ? fromJS(JSON.parse(state)) : fromJS({}),
    }),
  };
}
