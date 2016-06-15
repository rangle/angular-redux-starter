const environment: any = window || this;
Object.assign(environment, {
  __DEV__: true,
  __PRODUCTION__: false,
  __TEST__: true
});

import './index.ts';

const testContext = (<{ context?: Function }>require)
  .context('./', true, /\.test\.ts$/);

testContext.keys().forEach(testContext);
