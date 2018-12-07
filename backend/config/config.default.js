'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543824389684_8443';

  // add your config here
  config.middleware = [];

  config.security = {
    domainWhiteList: [ 'http://localhost:8080' ]
  };

  return config;
};
