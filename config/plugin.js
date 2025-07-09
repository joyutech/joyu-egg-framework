'use strict';

module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // 跨域配置插件
  cors : {
    enable: true,
    package: 'egg-cors',
  },

  // 路由增强插件，可以通过指定 namespace 统一添加前缀，给路由分组
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },

  // ejs 插件
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },

  // 参数校验插件
  validate: {
    enable: true,
    package: 'egg-validate',
  },

  // jwt 插件
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },

  // MySql 数据库查询构建器
  knex: {
    enable: true,
    package: '@joyu/egg-knex',
  },

  // MongoDB ODM
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },

  // redis 插件
  redis: {
    enable: true,
    package: '@eggjs/redis',
  },

};
