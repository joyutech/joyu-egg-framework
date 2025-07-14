/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {

  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
   const config = exports = {};

  config.logger = {
    level: 'DEBUG',
    consoleLevel: 'DEBUG',
  };

  config.customLogger = {
    scheduleLogger: {
      level: 'DEBUG',
      consoleLevel: 'NONE',
    },
  };

  config.view = {
    cache: false,
  };

  return config;
};
