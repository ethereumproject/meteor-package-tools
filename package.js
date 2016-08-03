Package.describe({
  name: 'etc:tools',
  summary: 'Helper functions for dapps',
  version: '0.5.2',
  git: 'http://github.com/ethereumproject/meteor-package-tools'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('mongo', ['client', 'server']);
  api.use('http', ['client', 'server']);
  api.use('spacebars', 'client');
  api.use('templating', 'client');
  api.use('tracker', 'client');
  //api.use('numeral:numeral@1.5.3', ['client', 'server']);
  api.use('3stack:bignumber@2.0.0', 'client');
  // !EPROJECT Restored web3 will be required
  api.use('etc:web3@0.15.1', ['client', 'server']);
  api.use('frozeman:persistent-minimongo@0.1.8', 'client');
  api.use('frozeman:storage@0.1.8', 'client');
  api.export(['EthTools'], ['client', 'server']);
  api.addFiles('ethtools.js', ['client', 'server']);
  api.addFiles('ticker.js', ['client', 'server']);
  api.addFiles('globalHelpers.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ethereum:tools');
  api.addFiles('ethtools-tests.js', ['client', 'server']);
});
