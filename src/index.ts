import * as angular from 'angular';

import './store/configure-store';

// Global styles
import './styles/index.css';

import {
  RioAlert,
  RioCounter,
  RioButton,
  RioForm,
  RioFormError,
  RioFormGroup,
  RioFormLabel,
  RioFormInput,
  RioLoginForm,
  RioLoginModal,
  RioModalContent,
  RioModalMask,
  RioNavigator,
  RioNavigatorItem,
  RioLogo,
} from './components';

import { RioAboutPage } from './containers/about-page';
import { RioCounterPage } from './containers/counter-page';
import { RioApp } from './containers/app';

import { RouterConfig } from './services';

angular.module('rio.router', ['ngComponentRouter'])
  .value('$routerRootComponent', RioApp.selector)
  .config(RouterConfig);


angular.module('rio.form', [])
  .component(RioForm.selector, RioForm.options)
  .component(RioFormError.selector, RioFormError.options)
  .component(RioFormGroup.selector, RioFormGroup.options)
  .component(RioFormInput.selector, RioFormInput.options)
  .component(RioFormLabel.selector, RioFormLabel.options);

angular.module('rio.modal', [])
  .component(RioModalContent.selector, RioModalContent.options)
  .component(RioModalMask.selector, RioModalMask.options);

angular.module('rio.login', [])
  .component(RioLoginForm.selector, RioLoginForm.options)
  .component(RioLoginModal.selector, RioLoginModal.options);

angular.module('rio.components', ['counter.store'])
  .component(RioCounterPage.selector, RioCounterPage.options)
  .component(RioAboutPage.selector, RioAboutPage.options)
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
    RioApp.selector,
    RioApp.options
  );

angular.element(document).ready(
  () => angular.bootstrap(document, [ 'app' ]));
