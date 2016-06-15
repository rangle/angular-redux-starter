import 'babel-polyfill';
import 'es5-shim';
import 'es6-shim';
import 'es6-promise';
import 'ts-helper';

import * as angular from 'angular';

import 'ngcomponentrouter';
import './store/configure-store';

import {AuthenticationActions} from './actions/authentication';
import {AuthenticationService} from './services/authentication';
import {ServerService} from './services/server';

// Global styles
import './styles/index.css';

import {
  RioAlert,
  RioContainer,
  RioCounter,
  RioButton,
  RioForm,
  RioFormError,
  RioFormGroup,
  RioLabel,
  RioInput,
  RioLoginForm,
  RioLoginModal,
  RioModal,
  RioModalContent,
  RioNavigator,
  RioNavigatorItem,
  RioLogo,
} from './components';

import { RioAboutPage } from './containers/about-page';
import { RioCounterPage } from './containers/counter-page';

import { RioSampleApp } from './containers/sample-app';

import { RouterConfig } from './services';

angular.module('rio.router', ['ngComponentRouter'])
  .value('$routerRootComponent', RioSampleApp.selector)
  .config(RouterConfig);

angular.module('rio.form', [])
  .component(RioForm.selector, RioForm.options)
  .component(RioFormError.selector, RioFormError.options)
  .component(RioFormGroup.selector, RioFormGroup.options)
  .component(RioInput.selector, RioInput.options)
  .component(RioLabel.selector, RioLabel.options);

angular.module('rio.modal', [])
  .component(RioModalContent.selector, RioModalContent.options)
  .component(RioModal.selector, RioModal.options);

angular.module('rio.login', [])
  .component(RioLoginForm.selector, RioLoginForm.options)
  .component(RioLoginModal.selector, RioLoginModal.options);

angular.module('rio.components', ['counter.store'])
  .component(RioCounterPage.selector, RioCounterPage.options)
  .component(RioAboutPage.selector, RioAboutPage.options)
  .component(RioContainer.selector, RioContainer.options)
  .component(RioCounter.selector, RioCounter.options)
  .component(RioButton.selector, RioButton.options)
  .component(RioNavigator.selector, RioNavigator.options)
  .component(RioNavigatorItem.selector, RioNavigatorItem.options)
  .component(RioLogo.selector, RioLogo.options)
  .component(RioAlert.selector, RioAlert.options);

angular.module('app', [
  'rio.router',
  'rio.components',
  'rio.form',
  'rio.login',
  'rio.modal'])
  .component(
    RioSampleApp.selector,
    RioSampleApp.options
  )
  .service('ServerService', ServerService)
  .service('AuthenticationService', AuthenticationService)
  .service('AuthenticationActions', AuthenticationActions);

declare const __TEST__: boolean;

if (!__TEST__) {
  angular.element(document).ready(
    () => angular.bootstrap(document, ['app'])
  );
}

