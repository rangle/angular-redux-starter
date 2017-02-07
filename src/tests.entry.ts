'use strict';

import 'core-js/es6';
import 'ts-helpers';

declare interface Require {
  context: Function;
}

declare const require: Require;

const testContext = require.context('./', true, /^(.(?!tests\.entry))*\.ts$/);

testContext.keys().forEach(
  key => {
    if (/\.spec\.ts$/.test(key)) {
      testContext(key);
    }
  });
