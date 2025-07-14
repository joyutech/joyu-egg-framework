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

  // 静态资源配置，官方教程没有这个章节了
  // 参考: https://www.jianshu.com/p/f1c7f3fa3998 和 https://www.jianshu.com/p/7e23f1c69279
  config.static = {
    // 静态化访问前缀，如：`http://127.0.0.1:7001/assets/images/logo.png`
    prefix: '/assets',
    // 静态化目录，可以设置多个静态化目录，`String` or `Array:[dir1, dir2, ...]`
    dir: path.join(appInfo.baseDir, 'app/public'),
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
    cache: true,
  };

  // 由于 Koa 的 ctx.query 对象会将每个查询参数都设置为字符串值，为了避免 validate 的
  // 严格验证导致报错，必须先将参数值转换为正确的类型再验证，所以要设 convert 为 true
  // 参考: https://github.com/koajs/parameter/issues/12
  config.validate = {
    convert: true,
  };

  return config;
};
