"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadFile = downloadFile;

var _manage = require("@/api/manage");

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 下载文件
 * @param url 文件路径
 * @param fileName 文件名
 * @param parameter
 * @returns {*}
 */
function downloadFile(url, fileName, parameter, method) {
  return new Promise(function (resolve) {
    return (0, _manage.downFile)(url, parameter, method).then(function (data) {
      if (!data || data.size === 0) {
        _vue["default"].prototype['$message'].warning('文件下载失败');

        return;
      }

      resolve();

      if (typeof window.navigator.msSaveBlob !== 'undefined') {
        window.navigator.msSaveBlob(new Blob([data]), fileName);
      } else {
        var _url = window.URL.createObjectURL(new Blob([data]));

        var link = document.createElement('a');
        link.style.display = 'none';
        link.href = _url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // 下载完成移除元素

        window.URL.revokeObjectURL(_url); // 释放掉blob对象
      }
    });
  });
}