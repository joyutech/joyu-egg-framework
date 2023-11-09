/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {

  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {
    scope: appInfo.scope,
  };

  config.security = {
    // 关于csrf攻击的原理参看该文章：https://www.cnblogs.com/wangyuyu/p/3388169.html
    csrf: {
      enable: true,
    },
    domainWhiteList: [ '*' ],
  };

  config.cors = {
    enable: true,
    // 一定要配置，不然跨域请求时OPTIONS无法正确回应
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    // origin不配置或配置为空就会使用security.domainWhiteList的配置
    origin: '',
  };

  config.logger = {
    // 业务日志 (app-web.log、egg-core.log、egg-agent.log、common-error.log)
    level: 'WARN',
    consoleLevel: 'NONE',
    dir: path.join(appInfo.baseDir, 'logs'),
    appLogName: 'app-web.log',
    coreLogName: 'egg-core.log',
    agentLogName: 'egg-agent.log',
    errorLogName: 'common-error.log',
    formatter: function(meta) {
      return `[${meta.date}][${meta.level}] ${meta.message}`;
    },
    contextFormatter: function(meta) {
      return `[${meta.date}][${meta.level}] ${meta.message}`;
    },
  };

  config.customLogger = {
    // 定时任务日志 (egg-schedule.log)
    scheduleLogger: {
      level: 'WARN',
      consoleLevel: 'NONE',
      file: path.join(appInfo.baseDir, 'logs', 'egg-schedule.log'),
    },
  };

  return config;
};
