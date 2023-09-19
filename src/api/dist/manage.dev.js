"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downFile = downFile;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 下载文件 用于excel导出
 * @param url
 * @param parameter
 * @returns {*}
 */
function downFile(url, parameter) {
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
  return (0, _axios["default"])({
    url: url,
    params: method === 'get' ? parameter : undefined,
    data: method === 'post' ? parameter : undefined,
    method: method,
    responseType: 'blob'
  });
}