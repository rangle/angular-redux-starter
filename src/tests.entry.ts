import './index.ts';

const testContext = (<{ context?: Function }>require)
  .context('./', true, /\.test\.ts$/);

testContext.keys().forEach(
  key => {
    if (/\.test\.ts$/.test(key)) {
      testContext(key);
    }
  });
