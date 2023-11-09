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
    // 业务日志（app-web.log、egg-web.log、egg-agent.log、common-error.log）
    level: 'DEBUG',
    consoleLevel: 'DEBUG',
  };

  return config;
};
