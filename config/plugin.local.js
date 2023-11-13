'use strict';

module.exports = {

  // HttpClient 方法设置请求代理的插件
  // GitHub：https://github.com/eggjs/egg-development-proxyagent
  // 配置参考: https://eggjs.github.io/zh/guide/httpclient.html#%E6%8A%93%E5%8C%85%E8%B0%83%E8%AF%95
  proxyagent : {
    enable: true,
    package: 'egg-development-proxyagent',
  },

};
