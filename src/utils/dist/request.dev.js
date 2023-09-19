"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

var _store = _interopRequireDefault(require("@/store"));

var _mutationTypes = require("@/store/mutation-types");

var _antDesignVue = require("ant-design-vue");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_antDesignVue.Notification); //创建实例


var baseURL = process.env.VUE_APP_BASE_HOST; // console.log(baseURL,'baseUrl')

var service = _axios["default"].create({
  baseURL: baseURL,
  timeout: 30000
}); //请求拦截


service.interceptors.request.use(function (config) {
  var token = localStorage.getItem(_mutationTypes.ACCESS_TOKEN);

  if (token) {
    config.headers['X-Access-Token'] = token;
  }

  if (config.method === 'get') {
    config.paramsSerializer = function (params) {
      return _qs["default"].stringify(params, {
        arrayFormat: "repeat"
      });
    };
  }

  return config;
}, function (error) {
  return Promise.reject(error);
}); //响应拦截

service.interceptors.response.use(function (response) {
  // console.log(response,'response')
  if (response.data.code == 500) {
    _antDesignVue.Notification.error({
      title: '系统提示',
      message: response.data.message,
      duration: 4
    });
  }

  return response.data;
}, function (error) {
  var data = error.response.data;

  switch (error.response.status) {
    case 403:
      _antDesignVue.Notification.error({
        title: '系统提示',
        message: '拒绝访问',
        duration: 4
      });

      break;

    case 500:
      _antDesignVue.Notification.error({
        title: '系统提示',
        message: '服务端异常!',
        duration: 4
      });

      break;

    case 404:
      _antDesignVue.Notification.error({
        title: '系统提示',
        message: '很抱歉，资源未找到!',
        duration: 4
      });

      break;

    case 504:
      _antDesignVue.Notification.error({
        title: '系统提示',
        message: '网络超时'
      });

      break;

    case 401:
      _antDesignVue.Notification.error({
        title: '系统提示',
        message: '未授权，请重新登录',
        duration: 4
      });

      _store["default"].dispatch('user/LogOut').then(function () {
        $router.replace('/login');
      });

      break;

    default:
      _antDesignVue.Notification.error({
        title: '系统提示',
        message: data.message,
        duration: 4
      });

  }
});
var _default = service;
exports["default"] = _default;