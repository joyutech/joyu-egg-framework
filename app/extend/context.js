'use strict';

const RES_CODE_MSG = {
  200: '成功',
  400: '请求参数错误',
  500: '服务器内部错误',
};

module.exports = {

  /**
   * 处理成功请求后的响应
   */
  success({ code = 200, msg, data }) {
    this.status = 200;
    this.body = {
      code,
      msg: msg || RES_CODE_MSG[code] || '',
      data,
    };
  },

  /**
   * 处理失败请求后的响应
   */
  fail({ code = 500, msg, data }) {
    this.status = 200;
    this.body = {
      code,
      msg: msg || RES_CODE_MSG[code] || '',
      data,
    };
  },

};
